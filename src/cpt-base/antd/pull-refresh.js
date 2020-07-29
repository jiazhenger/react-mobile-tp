import React from 'react'
// ===================================================================== antd
import { PullToRefresh, ListView, Icon } from 'antd-mobile'
// ===================================================================== declare
const { $config, $fn } = window
// =====================================================================
export default class extends React.Component{
	state = {
		upLoading:false
	}
	
	dataSource = new ListView.DataSource({
		rowHasChanged: (r1, r2) => r1 !== r2,
	})
	
	componentDidMount(){
		if(this.props.useBody){
			
		}
	}
	
	render(){
		const { loading, complete, onRefresh, onLoad, onRow, style, pageSize, data, size, useBody, header } = this.props
		return (
			<ListView
				key						= '1'
				ref						= { el => this.refs = el }
				useBodyScroll			= { useBody }
				// 外层样式
				style					= {{ height: '100%', ...style }}
				renderHeader			= { header }
				dataSource				= { this.dataSource.cloneWithRows(data) }
				renderFooter			= { () => (
											<div className='tc f12 pb20'>
												{
													loading ? <div className='fxmc'><Icon type='loading'/><span className='ml5'>数据加载中...</span></div>
															: (
																$fn.hasArray(data) ? <span>～没有更多数据啦～</span> : '暂无数据'
															)
												}
											</div>
				)}
				renderRow				= { (rowData, sectionID, rowID) => {
											if(onRow){
												return onRow(rowData,+rowID)
											}else{
												return null
											}
				} }
				// 分隔列表样式
				renderSeparator			= { (sectionID, rowID) => (
											<div
												key		= {`${sectionID}-${rowID}`}
												style	= {{ display:'none' }}
											/>
				)}
				// 上拉加载
				pullToRefresh			= { onRefresh ? <PullToRefresh refreshing={loading} onRefresh={onRefresh} /> : null }
				// 下拉刷新
				onEndReached			= {  e => {
										if(loading || complete) return
										onLoad()
				}}
				// 初次渲染多少条数据
				initialListSize			= { size || $config.pageSize }
				// 每次渲染多少条数据
				pageSize				= { pageSize || $config.pageSize }
				// 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行
				// scrollRenderAheadDistance = {500}
				// 控制在滚动过程中，scroll事件被调用的频率
				scrollEventThrottle		= { 50 }
				// 调用onEndReached之前的临界值，单位是像素
				onEndReachedThreshold	= { 30 }
			/>
		)
	}
}