import { useState , useEffect } from 'react'
const getPosition = () => { 
	return {
		x: document.body.scrollLeft,
		y: document.body.scrollTop
	}
}
const useScroll = () => { 
	const [position, setPosition] = useState(getPosition());
	useEffect(() => { 
		const handler = () => {
			setPosition(getPosition())
		};
		document.addEventListener('scroll', handler);
		return () => { 
			document.removeEventListener('scroll', handler);
		}
	}, [])
	return position
	
}
export default useScroll


