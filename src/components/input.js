/* ======================================  Input  ====================================== */
import React from 'react';
// =====================================================================
export default class Button extends React.Component{
	state={
		value:''
	}
	
	onChange = e => {
		let value = e.target.value
		this.setState({value:value,change:true},()=>{
			this.props.onChange({[this.props.name]:value})
		})
	}
	componentDidMount(){
		if(this.props.value){ this.setValue(this.props.value) }
	}
	
	setValue = value => {
		this.setState({value: value })
	}
	
	reset = () => this.setState({ value:'' })
	
	render(){
		const { icon, className, p, readOnly, children, disabled, type, label, style } = this.props
		return(
			<div className={`plr10 fxm ${className||''}`} style={{zIndex:10,height:'40px',background:'#fff',borderBottom:'1px solid #dedede',...style}}>
				{
					icon && <img src={icon} className='mr10' style={{width:'20px'}} alt=''/>
				}
				{
					label && <b className='f15'>{label}</b>
				}
				
				<div className='ex rel h'>
					<input 
						value		 	= { this.state.value }
						placeholder	 	= { p } 
						readOnly	 	= { readOnly }
						onChange	 	= { this.onChange }
						disabled     	= { disabled ? 'disabled' : false }
						type 		 	= { type || 'text' }
						className	 	= 'wh f15'
						style 		 	= {{border:0,background:'transparent',color:'#2F364C'}}
						autoComplete	= 'new-password'
					/>
					{
						readOnly?<i className='abs_lt wh'></i>:null
					}
				</div>
				{children}
			</div>
		)
	}
	
}

