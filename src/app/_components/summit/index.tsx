import Tile from '@/components/Tile';
import H2 from '@/components/heading/H2';
import replaceBlankSpace from '@/lib/stringUtils.ts';
import { conversation, development, graduateCap, person, puzzle, workshop } from './assets.ts';

export default function Summit() {
	const tileData = [
		{
			icon: puzzle,
			iconAlt: 'Puzzle',
			title: 'Spotkanie z ambicją i kreatywnością',
			description: 'Dołącz do wspólnoty ambitnych polskich studentów z uczelni z całego świata i zbuduj nowe znajomości!',
		},
		{
			icon: person,
			iconAlt: 'Person',
			title: 'Panele dyskusyjne z ekspertami',
			description:
				'Uczestnicz w dyskusjach z światowej klasy ekspertami, naukowcami oraz liderami biznesu, którzy debatują o najistotniejszych problemach naszych czasów i wpływie technologii na ich rozwiązania.',
		},
		{
			icon: workshop,
			iconAlt: 'Workshop',
			title: 'Interaktywne warsztaty',
			description: 'Weź udział w warsztatach prowadzonych przez przedstawicieli wiodących funduszy inwestycyjnych i międzynarodowych korporacji.',
		},
		{
			icon: development,
			iconAlt: 'Development',
			title: 'Rozwój kariery',
			description:
				'Pokaż się ze swojej najlepszej strony i zdobądź potencjalne praktyki albo inne okazję rozwoju swojej kariery w jednej z obecnych na konferencji firm!',
		},
		{
			icon: graduateCap,
			iconAlt: 'Graduate Cap',
			title: 'Edukacja za granicą',
			description: 'Dowiedz się jak możemy pomóc Ci studiować na najlepszych uczelniach na świecie!',
		},
		{
			icon: conversation,
			iconAlt: 'Conversation',
			title: 'Networking i rozrywka',
			description:
				'Nie przegap okazji do spotkań z innymi studentami i prelegentami podczas bankietu oraz uroczystego balu- idealna szansa na wymianę myśli, zawarcie nowych znajomości i niezapomnianą zabawę.',
		},
	];

	return (
		<section>
			<H2 className="text-wrap font-autonomous text-3xl sm:text-4xl">Summit 2024</H2>
			<p>Dlaczego nie może Cię zabraknąć na naszej jubileuszowej konferencji?</p>
			<div className="mt-16 grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
				{tileData.map(({ icon, iconAlt, title, description }) => (
					<Tile key={replaceBlankSpace(iconAlt, '-')} icon={icon} iconAlt={iconAlt} title={title} description={description} />
				))}
			</div>
		</section>
	);
}
