import "./index.less";
import { useState, useReducer, useEffect,useCallback } from 'react';
import useCounter from "@/hooks/useCounter";
import useScroll  from "@/hooks/useScroll";

const UseComponent = () => {

	const { y } = useScroll();
	const goTop = useCallback(() => {
		document.body.scrollTop = 0
		console.log("111",document.getElementsByClassName('content-box')[0]);
	}, []);
	const { decrement , increment , reset , square ,count} = useCounter();


	return (
		<div className="card content-box">
			<span className="text">UseComponent 🍓🍇🍈🍉 {count}</span>

			<div className="sjx">
				<h1>border实现三角形</h1>
				<div className="top"></div>
				<div className="left"></div>
				<div className="right"></div>
				<div className="bottom"></div>
			</div>
			{
				 <button onClick={goTop} title="11" className="fix-btn">
				^
			</button> }
		
			<div>
				<button onClick={() => increment(1)}>加1</button>
				<button onClick={()=>increment(2)}>加2</button>
						<button onClick={()=>decrement(20)}>减20</button>
				<button onClick={()=>square()} >平方</button>
				<button onClick={()=>reset()}>重置</button>
			</div>

			<h2>flex 布局</h2>
			<div className="flex1">
				<div className="top" >
					header
				</div>
				<div className="center">
					center
				</div>
				<div className="bottom">
					footer
				</div>
			</div>
			<h2>
				圣杯布局（中间元素padding）/双飞翼布局（margin）
			</h2>
			<div className="flex2">
				
				<div className="center">
					双飞翼布局主要是在middle区域添加一个子元素，middle-inline，然后通过margin来实现；<br/>
          调整left区域的margin-left为-100%，因为middle的宽度为100%；right区域的margin-left调整为-200px,自己的宽度；<br/>
          同样出现了覆盖middle区域的情况，这里通过调整子元素middle-inline的margin来实现，左右的间距就是left和right的宽度

				</div>
				<div className="left" >
					left
				</div>
				<div className="right">
					right
				</div>
				
			</div>
				<h2>
				flex 实现 圣杯布局/双飞翼布局
			</h2>
			<div className="flex3">
					
				<div className="left" >
					left
				</div>
					<div className="center">
					flex 实现 
         

				</div>
				<div className="right">
					right
				</div>
				
			</div>
		</div>
		
	);
};

 export default UseComponent;
