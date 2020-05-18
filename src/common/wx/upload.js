/* ====================================== 上传图片  ====================================== */
import WxPlatforms, {wx} from '@common/wx/platform'
const { $fn } = window

// 选择图片
const chooseImage = (option, callback) => {
	const opt = {
		max:1,
		type: 0,
		...option
	}
	// 选择图片方式
	let sourceType = ['album', 'camera']
	if(opt.type === 1){
		sourceType = sourceType[0] 		  // 选择图片上传
	}else if(opt.type === 2){ 
		sourceType = sourceType[1] 		// 拍照上传
	}
	
	wx.chooseImage({
	    count: opt.max, 									// 上传图片数量
	    sizeType: ['original', 'compressed'], 			// 可以指定是原图还是压缩图，默认二者都有
	    sourceType, 									// 可以指定来源是相册还是相机，默认二者都有 ['album', 'camera']
	    success: res => { 
	    	callback && callback(res.localIds)
	    },
	    fail: res => { 
           $fn.toast('选择图片失败')
        } 
	})
}
// 上传图片
const uploadImage= (localId, callback) => {
	wx.uploadImage({ 
        localId:localId[0], 
        success:res => {
        	callback && callback(res.serverId)
        },
        fail: res => { 
           $fn.toast('上传图片失败')
        } 
    })
}

export const WxPlatform = WxPlatforms

export const WxConfig = ( callback ) => {
	
	if($fn.local('wxConfig')) { return }
	
	window.$http.pull(null,'jssdk/config',{ param:{ url: $fn.local('root') }, loading:false }).then(data=>{
		wx.config({
//			debug: true,
			...data,
		    jsApiList: ['chooseImage', 'previewImage','uploadImage'] 	// 必填，需要使用的JS接口列表
		})
		
		wx.error(()=>{
			window.$fn.toast('微信配置失败，刷新重试')
			$fn.remove('wxConfig')
		})
		
		wx.ready(()=>{
			$fn.local('wxConfig',data)
		})
	})
}

setTimeout(()=>{ WxConfig() },200)



export default (type, callback) => {
	chooseImage({type}, localId =>{
		uploadImage(localId, mediaId =>{
			callback && callback(mediaId)
		})
	})
}
