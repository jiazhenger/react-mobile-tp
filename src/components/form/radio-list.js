import React from 'react'
// =====================================================================  public component
import Pop from '@cpx/pop'
import Check from '@cpx/svg/check'
// ===================================================================== declare
const $fn = window.$fn
// ===================================================================== 
export default class extends React.Component{
	state = {}
	open = () => this.refs.pop.open()
	close = () => this.refs.pop.close()
	
	onClick(v){
		const { onChange, name, idStr, data } = this.props
		const iStr = idStr || 'id'
		const isObject = $fn.hasArray(data) && $fn.hasObject(data[0])
		const checked = isObject ? v[iStr] : v
		
		// 点击已选择，则不触发事件
		if((checked === this.state.checked) || ( this.state.checked === undefined && checked === this.props.checked)){ return }
		
		this.setState({checked},()=>{
			onChange && onChange( {[name]: checked}, v)
			this.close()
		})
	}
	
	clear = () =>　this.setState({checked:null})
	setValue = v =>　this.setState({checked:v})
	
	render(){
		const { data, title, idStr, nameStr, checked, onClose, showNum, mode, top, el, onOpen, hideClose } = this.props
		const nStr = nameStr || 'name'
		const iStr = idStr || 'id'
		const isObject = $fn.hasArray(data) && $fn.hasObject(data[0])
		const isInnerChecked = this.state.checked !== undefined 	// 优先选择部 checked
		const checkedValue = isInnerChecked ? this.state.checked : checked
		const num = showNum || 6 		// 显示数量
		const height = 50				// 每行高度
		const scrollHeight = ($fn.hasArray(data) && data.length > num) ? num * height + 'px' : null
		return (
			<Pop ref='pop' mode={mode || 'up'} top={top} hideClose={hideClose} el={el} maskClose minHeight='0' width='100%' title={title} onClose={onClose} onOpen={onOpen}>
				{
					$fn.hasArray(data) ? (
						<ul className='oys' style={{height:scrollHeight}}>
							{
								data.map((v,i)=> (
									<li
										key			= {i} 
										className	= {`fxm tap plr10 ${i!==0 ? 'tbor1':''}`}
										style		= {{height:height + 'px'}}
										onClick 	= { this.onClick.bind(this,v)}
									>
										<h6 className='ex'>{ $fn.val(isObject ? v[nStr] : v)}</h6>
										{ checkedValue === (isObject ? v[iStr] : v) && <Check />}
									</li>
								))
							}
						</ul>
					): <div className='g9 h100 fxmc f12'>暂无{title&&title.replace('选择','')}数据</div>
				}
			</Pop>
		)
	}
}
