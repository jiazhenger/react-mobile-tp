/* ====================================== 判断平台  ====================================== */
import WX from 'weixin-js-sdk'

export const wx = WX

const WxPlatform = option => {
	const opt = {...option}
	var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') >= 0) { 	// 在微信浏览器打开
    	wx.miniProgram.getEnv(function(res) {
			if(res.miniprogram){ 				// 在小程序打开
				opt.onMi && opt.onMi()
			}else{ 								// 在公众号打开
				opt.onWx && opt.onWx()
			}
		})
    }else{
    	opt.onNoWx && opt.onNoWx()
    }
}

export default WxPlatform
