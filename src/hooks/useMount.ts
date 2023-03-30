//在初始化只执行一次
import React from 'react';
const useMount = (fn: () => void) => { 
	React.useEffect(() => {
		fn();
	 },[])
}
