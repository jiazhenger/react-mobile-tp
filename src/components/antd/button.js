import React from 'react'
// ===================================================================== public component
import Plus from '@cpx/svg/plus'
// ===================================================================== images
// ===================================================================== antd
import { Button } from 'antd-mobile'
// =====================================================================
const Center = props => <div className='fxmc'><Btn {...props} width={props.width||'100%'} /></div>
const Add = props => <Btn {...props} width={props.width||'100%'} text={<div className='fxmc'><Plus /><span className='ml5'>{props.text}</span></div>} />

export default class Btn extends React.Component{
	
	static Center = Center
	static Add = Add
	
	render(){
		const { children, label, width, height, className, onClick, loading, disabled, round, ghost, fontSize, f16, style, isGray } = this.props
		let h = height || '50px'
		let font = fontSize || '18px'
		if(f16){
			font = '16px'
			h = '44px'
		}
		return (
			<Button 
				className	= { `${className?className:''} ${isGray?'gray':''}` } 
				style		= {{ width:width,height:h, lineHeight:h, borderRadius: round ? h : '5px', fontSize: font,...style }} 
				type		= { ghost ? 'ghost' : 'primary' } 
				loading		= { loading } 
				disabled	= { disabled } 
				onClick		= { onClick }
			>
				{label||children}
			</Button>
		)
	}
}