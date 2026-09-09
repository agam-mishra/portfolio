export function formatDate(inputDate: string) {
	const date = new Date(inputDate);

	const formattedDate = new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(date);

	return formattedDate;
}
