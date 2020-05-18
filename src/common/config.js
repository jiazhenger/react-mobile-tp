/* ====================================== api 配置  ====================================== */
const env = process.env.NODE_ENV === 'development';	// 是否为开发环境

const exist = str => window.location.host.indexOf(str) >= 0

let api = '/'					// 正式访问 api

// let apt = 'http://wechat.norsonmed.com:8700/'		// 测试访问 api
// let apt = 'http://192.168.0.65/'
let apt = 'http://192.168.110.217:8090/'

//let apr = 'http://192.168.5.68:9999/'				// 预发访问 api

if(env){ // 开发环境
//	api = apt
	api = apt
}else{ // 生产环境
	if(exist('//:cdszdev.ubzyw.com')) {	 	// 测试环境
    	api = apt
    }
}
/* ====================================== 全局变量配置  ====================================== */
module.exports = {
	api : api, 		// api
	env : env, 		// 环境变量
	contentType: 1  ,// Content-type 数据传输类型
	pageSize: 10,
}

// 正式：http://cdsz.ubzyw.com
// 测试：http://cdszdev.ubzyw.com