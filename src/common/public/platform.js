/* ====================================== 全局变量及方法  ====================================== */
export default (androidCallback,iosCallback,pcCallback) => {
	let u = navigator.userAgent;
	let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
	let isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
	
	if(isAndroid){
		androidCallback && androidCallback();
	}else if(isIos){
		iosCallback && iosCallback();
	}else{
		pcCallback && pcCallback();
	}
	
	return {
		isAndroid : isAndroid,
		isIos : isIos,
		isPc: !isMobile
	}
}
