import React from 'react'
// ===================================================================== 关闭按钮
export default ({ color, size }) => (
	<div className='fxmc' style={{fontSize:size||'24px'}}>
		<svg width='1em' height='1em' x='0px' y='0px' viewBox='0 0 24 30'>
			<rect x='0' y='0' width='4' height='10' fill={color||window.$fn.c0} transform='translate(0 0.485359)'>
                <animateTransform attributeType='xml' attributeName='transform' type='translate' values='0 0; 0 20; 0 0' begin='0' dur='0.6s' repeatCount='indefinite'></animateTransform>
            </rect>
            <rect x='10' y='0' width='4' height='10' fill={color||window.$fn.c0} transform='translate(0 12.848)'>
                <animateTransform attributeType='xml' attributeName='transform' type='translate' values='0 0; 0 20; 0 0' begin='0.2s' dur='0.6s' repeatCount='indefinite'></animateTransform>
            </rect>
            <rect x='20' y='0' width='4' height='10' fill={color||window.$fn.c0} transform='translate(0 13.8187)'>
                <animateTransform attributeType='xml' attributeName='transform' type='translate' values='0 0; 0 20; 0 0' begin='0.4s' dur='0.6s' repeatCount='indefinite'></animateTransform>
            </rect>
		</svg>
	</div>
)
