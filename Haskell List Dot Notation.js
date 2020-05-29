function ArrayComprehension(options) {
	const {generator} = options;
	if (typeof generator !== 'string' || generator.trim().length === 0) return [];
	if (!generator.includes('..')) return generator.split(',').map(Number);

	if (!generator.includes(',')) {
		const [first, last] = generator.split('..').map(Number);
		return first > last ? [] : Array.from({length: last - first + 1}, (v, i) => first + i).map(Number);
	}

	const [a, arr] = [Number(generator.split(',')[0]), generator.split(',')[1]];
	const [first, last] = arr.split('..').map(Number);
	const step = first - a;

	if (first === last) {
		return [a, first];
	}
	if (a < first && first > last) {
		return [a];
	}
	const result = [];
	for (let i = 1, current = a; last > first ? current <= last : current >= last; current = a + i * step, i++) {
		result.push(current);
	}
	return result.map(Number);
}

