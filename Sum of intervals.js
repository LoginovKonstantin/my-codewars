function sumIntervals(intervals) {
	for (let i = 0; i < intervals.length; i++) {
		for (let j = 0; j < intervals.length; j++) {
			if (i !== j && intervals[i] && intervals[j] && isOverlap(intervals[i], intervals[j])) {
				const m = merge(intervals[i], intervals[j]);
				intervals.splice(i > j ? i : j, 1);
				intervals.splice(i > j ? j : i, 1);
				intervals.push(m);
				sumIntervals(intervals);
			}
		}
	}
	return intervals.reduce((acc, curr) => acc + curr[1] - curr[0], 0);
}

function isOverlap(arr1, arr2) {
	return arr1[0] <= arr2[0] && arr1[1] > arr2[0];
}

function merge(arr1, arr2) {
	const first = arr1[0] < arr2[0] ? arr1[0] : arr2[0];
	const second = arr1[1] < arr2[1] ? arr2[1] : arr1[1];
	return [first, second];
}
