/* ====================================== toast  ====================================== */
import React from 'react'
// ===================================================================== 
export default ({ size, color, type, style }) => {
	let deg = 0
	if(type === 'left'){ deg = 90}
	else if(type === 'right'){ deg = -90}
	else if(type === 'up'){ deg = -180}
	return (
		<div style={{fontSize:size||'13px'}} className='fxmc'>
			<svg width={'1em'} height={'1em'} viewBox='0 0 1024 1024' className='linear' style={{...style,transform:`rotate(${deg}deg)`}} fill={color}>
				<path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
			</svg>
		</div>
	)
}
