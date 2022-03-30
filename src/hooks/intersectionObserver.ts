import { MutableRefObject } from 'react';
import { useIntersectionObserver } from '@asyarb/use-intersection-observer';

export const intersectionOptions = {
	rootMargin: `0px`,
	threshold: 0.55,
	triggerOnce: false,
};

export const useCustomIntersectionObserver = (
	ref: MutableRefObject<null>,
	activeTab: string,
	handleInView: (activeTab: string) => void,
) => {
	useIntersectionObserver({
		ref,
		options: intersectionOptions,
		callback: entries => {
			if (entries.target.id !== activeTab && entries.isIntersecting) {
				handleInView(entries.target.id);
			}
		},
	});
};
