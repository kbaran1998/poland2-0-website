import type { HTMLAttributes } from 'react';

import mergeClassName from '@/lib/mergeClassName';
import ClientImage from './image/ClientImage.tsx';
import type { ImageSource } from './image/index.ts';

interface Props extends HTMLAttributes<HTMLElement> {
	imageSrc: ImageSource;
	imageAlt: string;
	caption: string;

	imageClassName?: string;
	captionClassName?: string;
}

export default function Figure(props: Readonly<Props>) {
	return (
		<figure
			className={mergeClassName('group relative flex flex-col items-center overflow-hidden rounded-3xl [user-select:none]', props.className)}
			onClick={props.onClick}
			onKeyUp={props.onKeyUp}
			tabIndex={props.onKeyUp === undefined ? undefined : 0}
		>
			<ClientImage
				src={props.imageSrc}
				alt={props.imageAlt}
				className={mergeClassName('pointer-events-none w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-110', props.imageClassName)}
			/>
			<figcaption
				className={mergeClassName(
					'pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-1/3 flex-col justify-end rounded-xl bg-gradient-to-t from-plBlack to-transparent p-6 font-autonomous font-bold text-lg text-plWhite',
					props.captionClassName,
				)}
			>
				{props.caption}
			</figcaption>
		</figure>
	);
}
