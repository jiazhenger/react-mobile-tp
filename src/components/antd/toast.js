// ===================================================================== antd
import { Toast } from 'antd-mobile'
// =====================================================================
export default {
	success: (content, duration, onClose, mask) => Toast.success(content, duration||1, onClose, mask),
	fail: (content, duration, onClose, mask) => Toast.fail(content, duration||1, onClose, mask),
	info: (content, duration, onClose, mask) => Toast.info(content, duration||1, onClose, mask),
	loading: (content, duration, onClose, mask) => Toast.loading(content, duration||1, onClose, mask),
	offline: (content, duration, onClose, mask) => Toast.offline(content, duration||1, onClose, mask)
}