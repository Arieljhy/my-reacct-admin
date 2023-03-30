
// * setAddState
export const setAddState = (num: Number) => ({
	type:'ADD_STATE',
	num
});

// * square
export const setSquare = () => ({
	type: 'SQUARE'
});


const getData = () => { 
	return fetch('/public/data.json').then(res => {
			console.log("res:",res)
		return res.json()
	
	})
			

}
// * 异步获取
export const setAction = (num:number) => ({
	type: 'GET_ACTION',
	num
});
// * redux-thunk
export const getAction1 = () => {
	return async () => {
		const res = await getData();
		dispatch(setAction(parseInt(res[3])))
	};
}

// * redux-promise《async/await》
export const getMenuListAction = async () => {
	const res = await getData();
	return {
		type: "GET_ACTION2",
		menuList: res.data ? res.data : []
	};
};


	function dispatch(arg0: { type: string; num: number; }) {
		throw new Error("Function not implemented.");
	}

