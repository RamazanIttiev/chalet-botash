import { MutableRefObject } from 'react';
import { useIntersectionObserver } from '@asyarb/use-intersection-observer';

export const intersectionOptions = {
	rootMargin: +window.screenY <= 768 ? `100px` : '0px',
	threshold: +window.screenY <= 768 ? 0.5 : 0.75,
	triggerOnce: false,
};

export const useCustomIntersectionObserver = (
	ref: MutableRefObject<null>,
	currentTab: string,
	handleInView: (currentTab: string) => void,
) => {
	useIntersectionObserver({
		ref,
		options: intersectionOptions,
		callback: entries => {
			if (entries.target.id !== currentTab && entries.isIntersecting) {
				handleInView(entries.target.id);
			}
		},
	});
};
