import { useState, useCallback } from 'react';
const useCounter = () => { 
	const [count, setCount] = useState(0);

	const increment = useCallback((num:number) => setCount(count + num), [count]);
	const decrement = useCallback((num:number) => setCount(count - num), [count]);
	const square = useCallback(() => setCount(count * count), [count]);
	const reset = useCallback(() => setCount(0), []);
	return { count , increment , decrement , reset ,square}

}
export default useCounter;
