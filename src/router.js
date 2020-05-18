/* ====================================== 模块子路由配置  ====================================== */
import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
// ===================================================================== 异步加载
import Import from '@com/bundle'
// ===================================================================== 同步路由
export default () => (
	<CacheSwitch when='forward'>
		<Route path='/' component={ Import('index') } exact />
		<Route path='/login' 	component={ Import('login') } exact />
		{/* 重定向 */}
		<Route path='/index' children={<Redirect to='/' />} exact />
		{/* 404 */}
		<Route component={ Import('404/index') } />
	</CacheSwitch>
)