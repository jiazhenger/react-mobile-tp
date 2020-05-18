/* ======================================  Input  ====================================== */
import React from 'react'
const $fn = window.$fn
// =====================================================================
class Input extends React.Component{
	state={
		
	}
	
	onChange = e => {
		let value = e.target.value
		this.setState({value:value,change:true},()=>{
			this.props.onChange && this.props.onChange({[this.props.name]:value})
		})
	}
	
	componentDidMount(){
		
	}
	
	setValue = value => this.setState({value:value})
	
	clear = () => this.setValue('')
	
	render(){
		const { isFocus } = this.state
		const { className, p, readOnly, disabled, type, style, onClick, max, onFocus, onBlur, height } = this.props
		let value = this.state.value !== undefined ? this.state.value : this.props.value
		if(!$fn.isValid(value)){ value = '' }
		return (
			<>
				{
					type ==='textarea' ?(
						<div className={`${className?className:''}`} style={{height}}>
							<textarea
								value		 = { value }
								placeholder	 = { p } 
								readOnly	 = { readOnly }
								onChange	 = { this.onChange }
								disabled     = { disabled ? 'disabled' : false }
								className	 = 'wh f16 wh'
								style 		 = {{border:0,background:isFocus?'#fff':'transparent',padding:'5px 10px',color:'#2F364C',...style}}
								maxLength	 = { max }
								onFocus 	 = { ()=>this.setState({isFocus:true}) }
								onBlur 	 	 = { ()=>this.setState({isFocus:false}) }
							></textarea>
						</div>
					) : (
						<div className={`${className?className:''}`} style={{height}}>
							<input
								value		 = { value }
								placeholder	 = { p } 
								readOnly	 = { readOnly }
								onChange	 = { this.onChange }
								onClick		 = { onClick }
								disabled     = { disabled ? 'disabled' : false }
								type 		 = { type || 'text' }
								className	 = { `wh f16 plr10 ${onClick?'tap':''}` }
								style 		 = {{border:0,background:'transparent',color:'#2F364C',...style}}
								maxLength	 = { max }
								onFocus 	 = { onFocus }
								onBlur 	 	 = { onBlur }
							/>
						</div>
					)
				}
			</>
		)
	}
}

export default class extends React.Component{
	static Textarea = React.forwardRef( (props,myRef) => <Input ref={myRef} type='textarea' {...props} /> )
	render(){
		return <Input {...this.props} />
	}
}
