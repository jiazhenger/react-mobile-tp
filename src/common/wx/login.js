/* ====================================== 微信登录  ====================================== */
const { $fn, $http } = window

export default option => {
	const opt = {
		appid:'wx8068e9343e9cabe0',
		state: 'STATE',							// 自定义参数
		codeApi:'loginController/login',		// 获取 code api,
		isScope:true,
		onSuccess:null
	}
	
	Object.assign(opt, option || {} );
	const redirectUri = encodeURIComponent(window.location.href.split('#')[0]); // 授权后跳转的回来的页面
	
	const search = $fn.getQuery()
	
	const code = search.code
	const scode = $fn.local('code')
	const scope = opt.isScope ? 'snsapi_userinfo' : 'snsapi_base'
	// 如果 code 不存在或 code第二次使用时，去获取 code
	if(!code || (scode && scode === code) ){
		const url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ opt.appid +
					'&redirect_uri=' + redirectUri +
					'&response_type=code&scope='+ scope +
					'&state='+ opt.state +
					'#wechat_redirect'
		window.location.href = url
	}else{// 存在则去跟后台换取 openid
		
		$fn.local('code',code)
		
		$http.pull(null,opt.codeApi, { param: { code: code }, noToken:true }).then(function(data){
			if($fn.hasObject(data)){
				opt.onSuccess && opt.onSuccess(data, code)
			}else{
				$fn.toast('登录失败!')
			}
		})
	}
}
