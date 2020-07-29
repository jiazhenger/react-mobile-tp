import React from 'react'
import { HashRouter } from 'react-router-dom'
// ===================================================================== router
import AppRouter from './router'
import Toast from '@base/toast'
import DataLoading from '@base/data-loading'
window.$fn.remove('wxConfig')

setTimeout( ()=>{ window.$fn.local('root',encodeURIComponent(window.location.href)) },200)

// ===================================================================== 二级路由
export default ( ) => (
	<>
		<HashRouter children={ <AppRouter /> } />
		<Toast />
		<DataLoading />
	</>
)