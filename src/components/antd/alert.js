import { Modal } from 'antd-mobile'
// ===================================================================== alert
export const Alert = option => {
	const opt = {
		title:'提示',
		text:'确认提交？',
		okTxt:'确认提交',
		disTxt:'取消',
		onOk: ()=>{ },
		...option
	}
	Modal.alert(
		'提示',
		(opt.text ? opt.text : opt.text + '?'),
		[
	 		{ text: opt.disTxt, onPress: opt.onDis },
  			{ text: opt.okTxt, onPress: opt.onOk },
		]
	)
}

export default { Alert }
