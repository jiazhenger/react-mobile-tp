import React from 'react'
// =====================================================================  public component
import Arrow from '@cpx/svg/arrow'
import Radio from './radio-list'
import Triangle from '@cpx/svg/triangle'
// ===================================================================== declare
const $fn = window.$fn
// ===================================================================== 
export default class extends React.Component{
	state = {}
	
	onClick = () => {
		const { onCheck } = this.props
		
		if(onCheck && onCheck()){
			this.open()
		}else if(!onCheck){
			this.open()
		}
	}
	
	open = () => {
		this.setState({show:!this.state.show},()=>{
			if(this.state.show){
				this.refs.radio.open()
			}else{
				this.close()
			}
		})
	}
	close = () => this.refs.radio && this.refs.radio.close()	
	onClose = () => {
		this.setState({show:false})
	}
	
	clear = () => {
		this.setState({title:null})
		this.refs.radio && this.refs.radio.clear()
	}
	setValue = v => {
		this.refs.radio && this.refs.radio.setValue(v)
	}
	
	onRadioChange = (model,sel) => {
		const { data, nameStr, onChange } = this.props
		const nStr = nameStr || 'name'
		const isObject = $fn.hasArray(data) && $fn.hasObject(data[0])
		const title =  isObject ? sel[nStr] : sel
		this.setState({title})
		onChange && onChange(model,sel)
	}
	render(){
		const { p, onChange, data, className, type, el, onOpen, idStr, nameStr, name, isTriangle } = this.props
		const { show } = this.state
		const iStr = idStr || 'id'
		const nStr = nameStr || 'name'
		const placeholder =  p ? (p.indexOf('选择')>=0 ? p : ( '选择' + p )) : '选择'
		const isSearch = type === 'search'
		const checked = this.state.checked === undefined ? this.props.checked : this.state.checked
		let title = this.state.title === undefined ? this.props.title : this.state.title
		// 根据默认 checked 获取 title
		if($fn.isValid(checked)){
			const checkedFilter = $fn.hasArray(data) ? data.filter(v=>v[iStr] === checked)[0] : {}
			const checkedTitle = checkedFilter ? checkedFilter[nStr] : null
			title = checkedTitle
		}
		const Icon = () => isTriangle ? <Triangle type={show?'up':'down'} color={show?$fn.c0:'#9CA5B0'} /> : <Arrow type={show?'up':'down'} color={show?$fn.c0:null} />
		return (
			<>
				{/* 表单选择 */}
				{
					isSearch ? (
						<div 
							className 	= {`fxmc ${onChange?'tap':''} ${className?className:''}`} 
							style		= {{padding:'12px 5px', background:!onChange?'#f5f5f5':'#fff'}}
							onClick		= { onChange?this.onClick:null }
							ref 		= 'search'
						>
							<span className='nowrap mr5' style={{color:title?$fn.c0:'#9CA5B0'}}>{title||p}</span>
							<Icon />
						</div>
					) : (
						<div 
							className	={ `bor1 r6px fxm plr10 linear ${onChange?'tap':''} ${className?className:''}` } 
							style		={{height:'50px',border:`1px solid ${show?$fn.c0:'#E6E8EC'}`, background:!onChange?'#f9f9f9':'#fff'}} 
							onClick		={ onChange?this.onClick:null }>
							<div className='ex'>
								{
									$fn.isValid(title) ? <h3 className='g0 f16'>{title}</h3> : <h3 className='g9'>{placeholder}</h3>
								}
							</div>
							{
								<div className='ml5 fxmc'>
									<Icon />
								</div>
							}
						</div>
					)
				}
				{/* 搜索选择 */}
				{
					onChange ? <Radio hideClose={isSearch} mode={isSearch ? 'down' : 'up'} el={el} idStr={iStr} nameStr={nStr} name={name} checked={checked} top={isSearch?(this.refs.search && this.refs.search.clientHeight + 1 + 'px'):0} title={!isSearch?`选择${p.replace('选择','')}`:null} ref='radio' onChange={this.onRadioChange} onClose={this.onClose} onOpen={onOpen} data={data} /> : null
				}
			</>
		)
	}
}
