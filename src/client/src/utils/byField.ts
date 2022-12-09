export default function byField<T>(
	fieldName: keyof T,
	inverse = false,
): (a: T, b: T) => number {
	return inverse
		? (a: T, b: T) => (a[fieldName] > b[fieldName] ? -1 : 1)
		: (a: T, b: T) => (a[fieldName] > b[fieldName] ? 1 : -1);
}
