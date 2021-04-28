export function schoolStart(date: Date): Date {
	const year = date.getMonth() < 9 ? date.getFullYear() - 1 : date.getFullYear();
	const start = new Date(year, 9 - 1, 1);
	return start;
}

export function week(date: Date = new Date()) {
	// @ts-expect-error Maybe
	return Math.round((date - schoolStart(date)) / (7 * 24 * 60 * 60 * 1000)) + 1;
}
