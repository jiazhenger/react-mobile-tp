/* ====================================== toast  ====================================== */
import React from 'react'
// ===================================================================== 
export default ({ className, style, children, title, suffix, contentClassName, onClick })=>(
	<div className={`bcf ${className || ''}`} style={style} onClick={onClick}>
		<header className='fxm xplr'>
			{
				title ? <h2 className='bcf h50 f16 b bbor1 ex'>{title}:</h2> : null
			}
			{suffix && suffix}
		</header>
		{
			children ? <section className={`${contentClassName||''}`}> {children} </section> : <div className='h100 fxmc g9'>无数据</div>
		}
	</div>
)
