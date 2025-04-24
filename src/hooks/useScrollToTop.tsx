import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const id = setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		}, 100);

		return () => {
			clearTimeout(id);
		};
	}, [pathname]);
};

export default useScrollToTop;