class Sudoku {
	constructor(matrix) {
		this.matrix = matrix;
	}

	isValid() {
		const correctMatrix = this.matrix.every(line => line.length === this.matrix.length);
		const allowedDigits = new Set(Array.from({length: this.matrix.length}, (v, k) => k + 1));
		if (!correctMatrix) {
			return false;
		}

		const mainDiagonal = new Set();
		const sideDiagonal = new Set();
		for(let i = 0; i < this.matrix.length; i++) {
			for(let j = 0; j < this.matrix[i].length; j++) {
				if(i === j) {
					mainDiagonal.add(this.matrix[i][j]);
				}
				if(i + j === this.matrix.length - 1) {
					sideDiagonal.add(this.matrix[i][j]);
				}
			}
		}

		if((mainDiagonal.size === 1 || sideDiagonal.size === 1) && this.matrix.length !== 1) {
			return false;
		}

		let isCorrectColumns = true;
		const isCorrectLines = this.matrix.reduce((acc, curr) => {
			const fixedLine = Array.from(new Set(curr)).sort();
			const isCorrectNumbers = fixedLine.length === allowedDigits.size && fixedLine.every(value => allowedDigits.has(value));
			if (fixedLine.length !== curr.length || !isCorrectNumbers) {
				return false;
			}
			return acc;
		}, true);
		if (!isCorrectLines) {
			return false;
		}
		for (let j = 0; j < this.matrix.length; j++) {
			let fixedColumn = new Set();
			for (let i = 0; i < this.matrix[j].length; i++) {
				fixedColumn.add(this.matrix[i][j]);
			}
			fixedColumn = Array.from(fixedColumn).sort();
			const isCorrectNumbers = fixedColumn.length === allowedDigits.size && fixedColumn.every(value => allowedDigits.has(value));
			if (this.matrix[j].length !== fixedColumn.length || !isCorrectNumbers) {
				isCorrectColumns = false;
			}
		}
		return isCorrectLines && isCorrectColumns;
	}
}

