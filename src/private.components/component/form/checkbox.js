import React from 'react'
// ===================================================================== public component
import Check from '@cpx/svg/check'

const $fn = window.$fn
const size = '25px'
// ===================================================================== component
export default class extends React.Component{
	state={}
	
	onClick = () => {
		const { onChange, noChange } = this.props
		if(noChange) {
			return onChange && onChange()
		}
		this.setState({checked:!this.state.checked},()=>{
			onChange && onChange(this.state.checked)
		})
	}
	
	check = bool => this.setState({checked: bool})
	
	render(){
		const { className, disabled, disgray, title } = this.props
		const checked = this.state.checked === undefined ? this.props.checked : this.state.checked
		const color = disgray?'#9CA5B0':$fn.c0
		return (
			<label className='fxm' onClick = {disabled||disgray ? null : this.onClick} >
				<span 
					className	= {`r100px bor1 fxmc linear ${disabled||disgray?'':'tap-o'} ${className?className:''}`} 
					style		= {{ 
							width:size,
							height:size, 
							border:`1px solid ${checked?color:'#BFC4CE'}`, 
							background:checked?color:'transparent', 
							opacity:disabled?0.3:1
					}}
				>
					{
						checked && <Check color='#fff' size='16px'/>
					}
				</span>
				{
					title && <span className='ml5'>{title}</span>
				}
			</label>
		)
	}
}
