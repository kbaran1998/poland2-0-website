import mergeClassName from '@/lib/mergeClassName';
import UnstyledButton, { type Props } from './UnstyledButton.tsx';

export default function TransparentButton(props: Readonly<Props>) {
	return (
		<UnstyledButton
			link={props.link}
			type={props.type}
			className={mergeClassName('rounded-lg border border-plWhite px-8 py-1 transition-colors duration-300 hover:border-purple-700', props.className)}
			onClick={props.onClick}
		>
			{props.children}
		</UnstyledButton>
	);
}
