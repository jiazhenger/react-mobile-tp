// ======================================================== css
import '@css/public.css'
import './App.css'
// ======================================================== global js
import './common/global'
// ======================================================== react
import React from 'react'
import ReactDOM from 'react-dom'
// ======================================================== 注册服务器
//import * as serviceWorker from './serviceWorker'
// ======================================================== 入口文件
import App from './App'
// ======================================================== material 主题配置
/*
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
const theme = createMuiTheme({
	palette: {
		primary: {
			main: window.$fn.c0
		}
	}
})
ReactDOM.render( <ThemeProvider theme={theme}><App/></ThemeProvider>, document.querySelector('#app-root') )
*/
// ======================================================== 启动 react
ReactDOM.render( <App/>, document.querySelector('#app-root') )

//setTimeout(()=>document.body.removeChild(document.querySelector('#app-loading')),500)
document.body.removeChild(document.querySelector('#app-loading'))
// ======================================================== 注册服务
//serviceWorker.unregister()