/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== 
const Fv = React.forwardRef( ({ className, header, footer, btnFooter, contentClassName, contentStyle, children, id, isWhite, isFullWhite, scrollY, style },myRef) => (
	<Content isWhite={isFullWhite} scrollY={false} className={`fv ${className||''}`} id={id} style={style}>
	
		{ header && header }
		
		<section className='rel ex'>
			<Content scrollY={scrollY} isWhite={isWhite} className={ contentClassName ? contentClassName : '' } style={contentStyle} ref={myRef}>
				{ children }
			</Content>
		</section>
		
		{ footer && footer }
		{ btnFooter && <footer className='xplr pt10 pb10 bcf tbor1'>{btnFooter}</footer> }
	</Content>
) )

export default class Content extends React.Component{
	static Fv = Fv
	
	reset = () => this.refs.scroll.scrollTop = 0
	
	render(){
		const { id, className, style, children, onClick, scrollY, scrollX, scrollXY, isPage, wraperClassName, wraperStyle, isWhite, isRel } = this.props
		let scroll = 'oys'
		if(scrollX){ scroll = 'oxs' }
		if(scrollY){ scroll = 'oys' }
		if(scrollXY || isPage){ scroll = 'oxys' }
		if(scrollY === false){ scroll = null }
		return (
			<div 
				id 			={ id } 
				className	={ `${isRel?'':'abs_lt'} wh ${scroll?scroll:''} ${className ? className:''}` }
				style		={{ background: isWhite?'#fff':'transparent', ...style}} 
				onClick		={ onClick }
				ref 		= 'scroll'
			>
				{
					isPage ? <section style={{minWidth:'1000px',...wraperStyle}} className={wraperClassName ? wraperClassName : ''}>{children}</section> : <>{children}</>
				}
			</div>
		)
	}
}