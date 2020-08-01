/*
 * ios移动端，软键盘收起后，页面内容不下滑
 * 
 * */

import $platform from './platform'

function getOffsetTop(el){
  if(el.parentElement && el.parentElement.style.position !== '') {
    return getOffsetTop(el.parentElement) + el.offsetTop
  }
  return el.offsetTop
}

export default id => {
	var blur = ()=>{}
	var $node = document.querySelector(id || '#KeyBoardMove')
	var keyBoardHeight = window.outerHeight * 0.2;
	$platform(()=>{
//		if(!window.ubzyInterFace){ return }
		if(!$node) return;
		var $scroll = document.querySelector('#ub-content');
		var pt = parseInt($scroll.style.paddingBottom)
			pt = isNaN(pt) ? 0 : pt;
		
		blur = html => {
			var node = Array.prototype.slice.call(document.querySelectorAll(html),0)
			node.forEach((v,i)=>{
				v.addEventListener('focus',function(e){
					if(this.getAttribute('readonly') === '' || this.getAttribute('disabled') === ''){return}
					var offsetTop = getOffsetTop(this);
					var scrollTop = $scroll.scrollTop;
					if(offsetTop - scrollTop > keyBoardHeight){
						$node.style.top = -(offsetTop - scrollTop - keyBoardHeight ) + 'px';
						$scroll.style.paddingBottom = keyBoardHeight + 'px'
					}
				})
				v.addEventListener('blur',function(){
					$node.style.top = 0;
					$scroll.style.paddingBottom = pt + 'px'
				})
			})
		}
	},()=>{
		blur = html => {
			var node = Array.prototype.slice.call(document.querySelectorAll(html),0)
			node.forEach((v,i)=>{
				v.addEventListener('blur',e=>{ window.scroll(0,0) })
			})
		}
	})
	if(document.querySelector('input')){ blur('input') }
	if(document.querySelector('textarea')){ blur('textarea') }
}
