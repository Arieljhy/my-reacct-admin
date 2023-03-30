//返回一个函数 调用会强制组件重渲染
import React, { useCallback } from 'react';
const useUpdate = () => { 
	const [, setState] = React.useState({});
	return useCallback(() => setState({}), []);
}
export default useUpdate;
