import { useCallback, useEffect, useState } from 'react';

export const useWindowDimensions = () => {
	const hasWindow = typeof window !== 'undefined';

	const getWindowDimensions = useCallback(() => {
		const width = hasWindow ? window.innerWidth : null;
		return {
			width,
		};
	}, [hasWindow]);

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		if (hasWindow) {
			const handleResize = () => {
				setWindowDimensions(getWindowDimensions());
			};

			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
		return undefined;
	}, [getWindowDimensions, hasWindow]);

	return windowDimensions;
};
