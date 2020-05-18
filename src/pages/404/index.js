import React from 'react'
// ===================================================================== public component
import Content from '@cpx/content'
import Button from '@cpt/antd/button'
import NotFound from './svg'
// =====================================================================
export default ({ history }) => (
	<Content className='bcf fxmc'>
		<div className='xplr ex'>
			<NotFound />
			<h2 className='g9 tc mt30 mb20'>对不起，页面未找到</h2>
			<Button.Center width='50%' text='返回首页' onClick={()=>history.push('/')}/>
		</div>
	</Content>
)