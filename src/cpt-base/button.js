import React from 'react'
// =====================================================================
export default ({ type, disabled, btnName, className, children, loading, onClick }) => (
	<button type={type} className={`${btnName||'btn-1'} fxmc ${className||''} ${loading?'loading':''}`} disabled={disabled || loading} onClick={onClick}>
		{
			loading?<i className='ico-loading'></i>:null
		}
		<span>{children}</span>
	</button>
)
