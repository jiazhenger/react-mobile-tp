/* ====================================== toast  ====================================== */
import React from 'react'
// ===================================================================== image
import DefImage from './svg/def-img'
// ===================================================================== 
const Center = props => {
	const { wrapClassName, wrapStyle, wrapWidth, wrapHeight, size, children } = props
	const width = size ? size : wrapWidth
	const height = size ? size : wrapHeight
	return (
		<div className={`fxmc ${wrapClassName?wrapClassName:''}`} style={{...wrapStyle,width,height}}>
			<Image className={`${size ? 'h' : ''}`} {...props}/>
			{ children }
		</div>
	)
}
const Wrap = props => {
	const { wrapClassName, wrapStyle, children } = props
	return (
		<div className={`${wrapClassName?wrapClassName:''}`} style={{...wrapStyle}}>
			<Image {...props}/>
			{children}
		</div>
	)
}

class Image extends React.Component{
	static Center = Center
	static Wrap = Wrap
	
	render(){
		const { src, width, height, size, style, className, onClick, alt, round } = this.props
		return src ? <img onClick={onClick} className={`w ${className?className:''} ${round?'r100px':''}`} style={{width,height,...style}} src={src} alt={alt||''}/> : <DefImage  size={size||width} />
	}
}

export default Image