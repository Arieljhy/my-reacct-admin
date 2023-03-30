import React from 'react'
//创建ref指向value 避免闭包 多次渲染中保持不变
const useLatest = (value:any) => { 
	const ref = React.useRef(value);
	ref.current = value;
	return ref;
}
export default useLatest;
