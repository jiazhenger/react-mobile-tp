/* ====================================== toast  ====================================== */
import React from 'react'
// ===================================================================== 
export default ({ size, color, type, style }) => {
	let deg = 0
	if(type === 'left'){ deg = -180}
	else if(type === 'up'){ deg = -90}
	else if(type === 'down'){ deg = 90}
	return (
		<div  style={{fontSize:size}} className='fxmc'>
			<svg width='1em' height='1em' viewBox='0 0 10 18' className='linear' style={{...style,transform:`rotate(${deg}deg)`}}>
			    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
			        <polyline id='Path-3' stroke={color||'#CFD2D5'} strokeWidth='1.5' transform='translate(4.941320, 9.000000) scale(-1, 1) rotate(-360.000000) translate(-4.941320, -9.000000) ' points='8.88263925 1 1 9 8.88263925 17'></polyline>
			    </g>
			</svg>
		</div>
	)
}
