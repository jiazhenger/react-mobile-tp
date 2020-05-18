import React from 'react'

const $fn = window.$fn

export default class extends React.Component{
	
	componentDidMount(){
	
	}
	
	start = 0
	end = 0
	// 移动开始
	onTouchStart = e => {
		const slider = this.refs.slider
		const { pageX } = e.changedTouches[0]
		const left = parseInt(slider.style.left)
		this.start = pageX - left
		slider.style.transition = 'none'
	}
	// 移动
	onTouchMove = e => {
		const w = parseInt(this.props.width || 70)
		const slider = this.refs.slider
		const { pageX } = e.changedTouches[0]
		let x = parseInt(this.start - pageX)
		
		if(x>=0 && x <= w){
			slider.style.left = -x + 'px'
		}
	}
	// 移动结束
	onTouchEnd = e => {
		const { pageX } = e.changedTouches[0]
		const w = parseInt(this.props.width || 70) / 2
		const slider = this.refs.slider
		let x = parseInt(this.start - pageX)
		if(x < w){ x = 0 }
		if(x>= w){ x = 70 }
		
		slider.style.transition = 'all .3s ease'
		slider.style.left = -x + 'px'
	}
	
	render(){
		const { children, width, radius, onDel } = this.props
		const borderRadius =  radius || '8px'
		return (
			<div className='rel'>
			
	        	<div onClick={onDel} className='fxmc tap-o abs_rt cf h' style={{width:width || '70px',background:$fn.c0, borderRadius:`0 ${borderRadius} ${borderRadius} 0`}}>删除</div>
	        
	        	<div 
	        		ref 			= 'slider'
	        		className		= 'rel linear'
	        		style			={{ left: 0 }}
	        		onTouchStart	= { this.onTouchStart }
	        		onTouchMove		= { this.onTouchMove }
	        		onTouchEnd		= { this.onTouchEnd }
	        	>
	        		{children}
	        	</div>
			</div>
		)
	}
}
