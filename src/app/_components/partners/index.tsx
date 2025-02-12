import PartnerLogo from '@/components/PartnerLogo';
import H4 from '@/components/heading/H4';

import replaceBlankSpace from '@/lib/stringUtils.ts';
import { currentPartners } from './assets/current.ts';
import { honoraryPatrons } from './assets/honorary.ts';
import { institutionalPartners } from './assets/institutional.ts';
import { mediaPatrons } from './assets/media.ts';
import { previousPartners } from './assets/previous.ts';
import { strategicPartners } from './assets/strategic.ts';

export default function Partners() {
	const partnersData = [
		{ title: 'Partnerzy strategiczni', partners: strategicPartners },
		{ title: 'Patronat honorowy', partners: honoraryPatrons },
		{ title: 'Partnerzy', partners: currentPartners },
		{ title: 'Partnerzy instytucjonalni', partners: institutionalPartners },
		{ title: 'Patroni medialni', partners: mediaPatrons },
		{ title: 'Poprzedni partnerzy', partners: previousPartners },
	];

	return (
		<section>
			<H4 className="mb-16 text-wrap font-autonomous text-3xl sm:text-4xl">Partnerzy Poland 2.0 Summit</H4>
			{partnersData.map(({ title, partners }) => (
				<div key={replaceBlankSpace(title, '-')} className="my-8">
					<p className="mb-4 w-12 font-autonomous font-light text-xl">{title}</p>
					<div className="flex flex-wrap gap-9">
						{partners.map((logo) => (
							<PartnerLogo key={replaceBlankSpace(`${title}-${logo.alt}`, '-')} src={logo} />
						))}
					</div>
				</div>
			))}
		</section>
	);
}
