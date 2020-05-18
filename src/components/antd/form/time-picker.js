/* ====================================== toast  ====================================== */
import React from 'react'
import { DatePicker } from 'antd-mobile'
import $time from '@common/time'
import Calendar from '@cpx/svg/calendar.js'
// ===================================================================== declare
const $fn = window.$fn
// ===================================================================== 
export default class extends React.Component{
	state = {}
	
	componentDidMount(){
		
	}
	
    onChange= date => {
    	const { name, onChange, lang, mode } = this.props
    	const time = $time.format(new Date(date).getTime(),{r:true,t:mode ? 'ymd':'ymd-hm',l:lang})
    	if(time){
    		onChange && onChange({[name] : time }, time )
    		this.close()
    	}
    }
    
	open = () => this.setState({show:true})
	close = () => this.setState({show:false})
	
	render(){
		const { lang, p, mode } = this.props
		const placeholder =  p ? (p.indexOf('选择')>=0 ? p : ( '选择' + p )) : '选择'
		const { show } = this.state
		let txt = this.state.value === undefined ? this.props.value : this.state.value
		if(lang === 'zh' && $fn.isValid(txt)){
    		txt = txt.replace('年','-')
    		txt = txt.replace('月','-')
    		txt = txt.replace('日','')
    	}
		if($fn.isNumber(txt)){ txt = $time.format(txt,{t:mode ? 'ymd':'full'})}
		const time = txt ? new Date(txt) : new Date()
		return (
			<React.Fragment>
				<div className='bor1 r6px h50 plr10 fxm tap' onClick={this.open}>
					<h6 className='ex omits-1 f16'>{txt?txt:<span className='g9'>{placeholder}</span>}</h6>
					<Calendar />
				</div>
				<DatePicker mode={mode} value={time} onDismiss={this.close} title={'选择' + p} onOk={this.onChange} visible={show}></DatePicker>
			</React.Fragment>
		)
	}
}