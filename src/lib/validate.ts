const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// TIP: Change this to validation lib like Joi, Yup, Zod or Superstruct to catch more edge cases

// regex starts with capital letter and ends with lowercase letter, has a length of 2-30 characters and contains no special characters (except - between names)
const reName = /^[A-Z][a-zA-Z-]{0,28}[a-z]$/;

function validateEmail(email: string) {
	return re.test(email.toLowerCase());
}

function validateName(name: string) {
	return name.length > 0 && reName.test(name);
}

export { validateEmail, validateName };
