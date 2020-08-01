import DataType from './utils/data-type'
import Storage from './core/storage'
import Query from './core/query'
import Rest from './core/rest'
import Inner from './core/inner'
/* ====================================== 全局变量及方法  ====================================== */
export default {
	// ======================================================================== 功能函数
	...DataType,
	...Storage,
	...Query,
	...Rest,
	...Inner,
	// ======================================================================== 全局变量
	c0:'#1890ff',
	c1:'#FF5218',
	// ======================================================================== 正则匹配
	//	isTel(v){ return /^1[0-9]{10}$/.test(v) },
	//	isPwd(v){ return /\w{6,18}$/.test(v) },
	//	pwdReg: /\w{6,18}$/,
	//	isId(v){ return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(v) },
	//	isCard(v){ return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(v) },
	//	isCard(v){ return true},
	//	isEmail(v){ return /^([0-9A-Za-z\-_]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(v) },
	//	isInt(v){ return /^[1-9]\d*$/.test(v) }, // 整数
	// ======================================================================== private
	// 刷新key
	// refresh(_this){ _this.setState({ key: (_this.state.key || 0) + 1}) },
}