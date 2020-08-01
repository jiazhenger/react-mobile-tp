import React from 'react'
import AddLast from '@cpt/add-last'
// ===================================================================== toast
export default ({ children, name }) => (
	<AddLast name={ name || 'ub-style'} el='head' tag='style'>
		{ children }
	</AddLast>
)
