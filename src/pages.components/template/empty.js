/* ====================================== 滚动条  ====================================== */
import React from 'react'

import Bottom from '@cpx/bottom'
// ===================================================================== images
import EmptyImage from '@images/empty/1.png'
import Loading from '@cpx/svg/loading-3'

const $fn = window.$fn
// ===================================================================== 
const NoData = ({ data, text, height }) => (
	(($fn.isArray(data) && data.length === 0) || !$fn.isArray(data))  ? (
		<div className={`fxmc bcf w ${height?'':'h'}`} style={ height ? {height:height === true ? '320px' : height} : {}}>
			<div className='tc w lh24 f15'>
				<div className='fxmc'><img style={{width:'40%'}} src={EmptyImage} alt='' /></div>
				<p className='g9 f13'>{text || '暂无数据'}</p>
			</div>
		</div>
	) : null
)
// ===================================================================== 
export default ({ loading, showLoading, data, text, className, children, noBottom, height })=>(
	<>
		{
			$fn.hasArray(data) && (
				<div className={className?className:''}>
					{children}
					{!noBottom && <Bottom/>}
				</div>
			)
		}
		{
			<>
				{/* 自定义加载效果 */}
				{
					loading && !$fn.hasArray(data) ? (
						showLoading ? (
							<div className='fxc wh ub-loading'>
								<div style={{padding: height ? '20px 0' : '30% 0'}}>
									<Loading />
									<div className='f13 g9 mt10'>数据加载中...</div>
								</div>
							</div>
						) : null
					) : <NoData data={data} text={text} height={height} />
				}
			</>
		}
	</>
)
