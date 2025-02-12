import Figure from '@/components/Figure';
import Link from '@/components/Link';
import H3 from '@/components/heading/H3.tsx';

import replaceBlankSpace from '@/lib/stringUtils.ts';
import { edu, nomadPodcast, work20 } from './assets.ts';

export default function OurProjects() {
	const projectsData = [
		{
			alt: 'Nomad Podcast',
			src: nomadPodcast,
			link: 'podcast',
		},
		{
			alt: 'Work 2.0',
			src: work20,
			link: 'work',
		},
		{
			alt: 'Edu 2.0',
			src: edu,
			link: 'edu',
		},
	];
	return (
		<section className="w-full">
			<H3 className="text-wrap font-autonomous text-3xl sm:text-4xl">Nasze projekty</H3>
			<p>Robimy o wiele więcej niż sama konferencja - dowiedź się więcej o naszych inicjatywach</p>
			<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projectsData.map(({ alt, src, link }) => (
					<Link key={replaceBlankSpace(link, '-')} href={`/${link}`} className="flex items-center justify-center">
						<Figure imageSrc={src} imageAlt={alt} caption={alt} />
					</Link>
				))}
			</div>
		</section>
	);
}
