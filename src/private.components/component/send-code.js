/* ======================================  发送验证码  ====================================== */
import React from 'react'
// ===================================================================== public component
import ToastComponent from '@cpt/toast'
// ===================================================================== antd antd
import { Toast } from 'antd-mobile'
// ===================================================================== declare
let cleartime
// =====================================================================
export default class SendCode extends React.Component{
	state={
		time: 60,
		disabled:false,
		txt:'获取验证码',
		data:null
	}
	componentWillUnmount(){
		clearInterval(cleartime)
	}
	getCode=()=>{
		if(this.state.disabled){
			return;
		}
		const defaultTime = this.state.time;
		const { phone } = this.props
		if(phone === '' || phone === undefined || phone === null){
			Toast.offline('电话不能为空')
			return;
		}
		const reg = window.$fn.isTel(phone)
		if(!reg){
			Toast.offline('电话格式不正确')
			return;
		}
		this.setState({ disabled:true })
		
		const api = this.props.api ? this.props.api : 'home/login/code'
		// 获取验证码
		window.$http.pull(this,api,{ 
			param:{phone}, 
			noToken:true, 
			onAny: () => { this.props.clearInput() },
			onError: () => { this.setState({ disabled:false }) },
			onMsg: data => {
				Toast.offline(data['msg'])
			}
		}).then(data=>{
			cleartime = setInterval(()=>{
				this.setState({ time: this.state.time - 1, txt:'后重新获取'});
				if(this.state.time <= 0){
					clearInterval(cleartime);
					this.setState({ 
						time: defaultTime, 
						txt:'重新获取',
						disabled:false,
					})
				}
			},1000)
			this.props.onChange && this.props.onChange(data)
		})
	}
	
	render(){
		const { disabled, time } = this.state
		const { className, phone } = this.props
		return(
			<>
				<button 
					type		= 'button' 
					onClick		= {this.getCode} 
					disabled	= { disabled }
					className	= {`${className?className:'btn-sendCode'} ${ disabled ? 'disabled' : ''} ${phone&&!disabled?'':'disgray'}`}
				>
					{
						disabled ? <span>{time}<i style={{marginLeft:'2px'}}>s</i></span> : <span>{this.state.txt}</span>
					}
				</button>
				<ToastComponent ref='toast' />
			</>
		)
	}
	
}

