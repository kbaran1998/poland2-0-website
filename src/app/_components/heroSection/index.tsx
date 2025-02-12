import GradientText from '@/components/GradientText';
import BaseHeroSection from '@/components/heroSection/HeroSection';

import { nlSummitHeroImg } from './assets.ts';

export default function HeroSection() {
	return (
		<section className="h-[75vh]">
			<BaseHeroSection
				description={
					<p>
						Dołącz do nas na naszym jubileuszowym wydarzeniu Poland 2.0 Summit 2024 w Hadze, gdzie ambitni i zafascynowani przyszłością Polacy, spotkają się, aby wspólnie
						odpowiedzieć na wyzwania zmieniającej się rzeczywistości. Jesteśmy Generacją 2.0 – twórcami naszej wspólnej rzeczywistości.
					</p>
				}
				imageSrc={nlSummitHeroImg}
				imageClassName="w-1/2"
				imageAlt="Poland 2.0 Summit 2024"
			>
				<GradientText>Poland</GradientText> 2.0 <br />
				Summit<GradientText> 2024</GradientText>
			</BaseHeroSection>

			<div className="mt-16 flex w-full flex-col items-center gap-4 text-center font-autonomous font-bold xl:mt-32">
				<p className="text-xl sm:text-3xl md:text-4xl">Dziękujemy za udział w</p>
				<p className="max-w-96 text-3xl uppercase sm:max-w-full md:text-4xl lg:text-5xl 2xl:text-5xl">Poland 2.0 Summit 2024</p>
			</div>
		</section>
	);
}
