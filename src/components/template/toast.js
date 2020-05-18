import React from 'react'

import Pop from '@cpx/pop'
import Input from '@cpx/input'

const $fn = window.$fn
// ===================================================================== toast
export default class extends React.Component{
	state = {
		model:{}
	}
	
	open = option => {
		const param = $fn.hasObject(option) ? option : this.props
		this.option = option
		this.setState(param,() => this.refs.toast.open() )
	}
	
	close = () => {
		this.refs.toast.close();
		this.props.onClose && this.props.onClose()
	}
	onOk = () => {
		const param = $fn.hasObject(this.option) ? this.option : this.props
		const { onOk, noClose } = param
		
		onOk && onOk(this.state.model)
		
		if(!noClose){
			this.close()
		}
	}
	confirm = (msg,option) => {
		this.setState({isInut:false})
		this.open({
			children:<div className='f15 tc lh24'>{msg}</div>,
			...option
		})
	}
	
	onChange = model => this.setState({model})
	
	clear = () => this.refs.input && this.refs.input.clear()
	
	reason = (msg,option) => {
		this.setState({isInut:true})
		this.open({
			...option
		})
	}
	render(){
		const { title, children, okTxt, hideOk, hideCancel, isInut, name, minHeight } = this.state
		const Footer = () => (
				(!hideOk || !hideCancel) ? (
					<nav className='fx tbor1 f16'>
						{
							!hideCancel && <button className='bcf h50 ex g9 tap' style={{borderRadius:'0 0 0 5px'}} onClick={this.close}>取消</button>
						}
						{
							!hideOk && <button className='bcf h50 ex lbor1 c0 tap' style={{borderRadius:'0 0 5px 0'}} onClick={this.onOk}>{okTxt||'确认'}</button>
						}
					</nav>
				) : null
		)
		return (
			<Pop hideClose={isInut} ref='toast' width='85%' minHeight={minHeight} maskClose title={title===undefined ? '提示' : null} contentClassName='lh22' contentStyle={{padding:'0 10px 15px'}} headerStyle={{borderBottom:0}} footer={<Footer/>}>
				{
					isInut ? <div className='ex pt10'><Input.Textarea ref='input' className='bcb' height='150px' onChange={this.onChange} name={name} p='请输入退回原因，不超过100字（可不填写）' max='100' /></div>
							: children
				}
				
			</Pop>
		)
	}
}