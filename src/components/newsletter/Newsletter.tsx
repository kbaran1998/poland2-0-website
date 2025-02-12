'use client';
import TransparentButton from '@/components/button/TransparentButton';
import H5 from '@/components/heading/H5';
import Input from '@/components/input.tsx';
import { type ChangeEvent, useRef, useState } from 'react';
import { validateEmail, validateName } from '../../lib/validate.ts';

export default function Newsletter() {
	// Reduce re-renders by using refs
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);

	const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(undefined);
	const [isFirstNameValid, setIsFirstNameValid] = useState<boolean | undefined>(undefined);
	const [isLastNameValid, setIsLastNameValid] = useState<boolean | undefined>(undefined);

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value;
		setIsEmailValid(validateEmail(email));
	};
	const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const firstName = event.target.value;
		setIsFirstNameValid(validateName(firstName));
	};
	const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const lastName = event.target.value;
		setIsLastNameValid(validateName(lastName));
	};

	const clearForm = () => {
		if (firstNameRef.current) {
			firstNameRef.current.value = '';
		}
		if (lastNameRef.current) {
			lastNameRef.current.value = '';
		}
		if (emailRef.current) {
			emailRef.current.value = '';
		}
	};

	const handleFormSubmit = async () => {
		const firstName = firstNameRef.current?.value;
		const lastName = lastNameRef.current?.value;
		const email = emailRef.current?.value;
		setIsFirstNameValid(validateName(firstName ?? ''));
		setIsLastNameValid(validateName(lastName ?? ''));
		setIsEmailValid(validateEmail(email ?? ''));
		if (isEmailValid && isFirstNameValid && isLastNameValid) {
			//send a post request using fetch
			const response = await fetch('api/newsletter/', {
				method: 'POST',
				body: JSON.stringify({
					firstName,
					lastName,
					email,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				alert('✅ Zapisano do newslettera!');
				clearForm();
			} else {
				alert('❌ Nie udało się zapisać do newslettera!');
			}
		}
	};

	return (
		<section id="newsletter" className="w-full rounded-3xl border-2 border-purple-700 bg-white/15 p-12 backdrop-blur-sm">
			<H5 className="mb-4 text-wrap pt-4 pb-4 font-autonomous text-3xl sm:text-3xl">Bądź na bieżąco!</H5>
			<div className="grid gap-8 md:grid-cols-[2fr_3fr]">
				<p className="pb-4">Zostań częścią społeczności Poland 2.0! Dołącz już dzisiaj i mailowo otrzymuj najnowsze informacje o naszych wydarzeniach i inicjatywach!</p>
				<div>
					<form>
						<div>
							<Input
								type="text"
								placeholder="Imię"
								ref={firstNameRef}
								onChange={handleFirstNameChange}
								className={isFirstNameValid === false && 'border-red-500 text-red-500'}
							/>
						</div>
						<div>
							<Input
								type="text"
								placeholder="Nazwisko"
								ref={lastNameRef}
								onChange={handleLastNameChange}
								className={isLastNameValid === false && 'border-red-500 text-red-500'}
							/>
						</div>
						<div>
							<Input
								type="email"
								placeholder="Adres e-mail"
								ref={emailRef}
								onChange={handleEmailChange}
								className={isEmailValid === false && 'border-red-500 text-red-500'}
							/>
						</div>
					</form>
					<TransparentButton className="float-right mt-8" onClick={handleFormSubmit}>
						Zapisz się
					</TransparentButton>
				</div>
			</div>
		</section>
	);
}
