import mergeClassName from '@/lib/mergeClassName';
import type { ClassValue } from 'clsx';
import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	className?: ClassValue;
}

export default forwardRef<HTMLInputElement, Props>(function Input(props, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className={mergeClassName(
				'my-2 w-full rounded-none border-plWhite border-b bg-gray-200 bg-transparent font-autonomous text-plWhite leading-3 placeholder-plWhite placeholder-opacity-100 focus:placeholder-opacity-70 focus:outline-none',
				props.className,
			)}
		/>
	);
});
