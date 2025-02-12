import { validateEmail, validateName } from '@/lib/validate';
import { NextResponse } from 'next/server';

interface NewsletterData {
	firstName: string;
	lastName: string;
	email: string;
}

export function GET(_: Request): Response {
	return NextResponse.json(
		{ error: 'Method not allowed' },
		{
			status: 405,
		},
	);
}

export async function POST(request: Request): Promise<Response> {
	// Validate data
	try {
		const data = await request.json();
		// TIP: Change this to validation lib like Joi, Yup, Zod or Superstruct to catch more edge cases
		const keys = Object.keys(data);
		if (!(keys.includes('firstName') && keys.includes('lastName') && keys.includes('email'))) {
			return NextResponse.json(
				{
					msg: 'Invalid data (contains)',
					data: {
						firstName: keys.includes('firstName'),
						lastName: keys.includes('lastName'),
						email: keys.includes('email'),
					},
				},
				{ status: 400 },
			);
		}

		// try to force cast data to NewsletterData
		const { firstName, lastName, email } = data as NewsletterData;

		const isFirstNameValid = validateName(firstName);
		const isLastNameValid = validateName(lastName);
		const isEmailValid = validateEmail(email);

		if (!(isFirstNameValid && isLastNameValid && isEmailValid)) {
			return NextResponse.json(
				{
					msg: 'Invalid data (format)',
					data: {
						firstName: isFirstNameValid,
						lastName: isLastNameValid,
						email: isEmailValid,
					},
				},
				{ status: 400 },
			);
		}
	} catch (_) {
		//should log error inside a log file
		return NextResponse.json({ msg: 'Server encountered an unexpected condition.' }, { status: 500 });
	}

	// Send data to newsletter service

	return NextResponse.json({ msg: 'Newsletter sent' }, { status: 201 });
}
