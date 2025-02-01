export default class GridGenerator {

    grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]

    GenerateGrid() {
        var attempts: number = 0
        
        attempts = 0
        this.grid = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]

        var row: number = 0
        var col: number = 0

        var validSubGrid: boolean = false
        var counter: number

        while (row < 3) {
            col = 0
            while (col < 3) {
                validSubGrid = false
                counter = 0
                while (!validSubGrid && counter < 99) {
                    this.resetSubGrid(row, col)
                    validSubGrid = this.generateSubGrid(row, col, this.shuffleArray())
                    counter++
                }
                if (counter === 99) {
                    attempts += 1
                    if (attempts > 100)
                        return this.grid
                    if (col > 0)
                        col--
                    else {
                        col = 2
                        row--
                    }
                }
                else
                    col++
            }
            row++
        }

        return this.grid
    }

    resetSubGrid(row: number, col: number) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[3 * row + i][3 * col + j] = 0
            }
        }
    }

    generateSubGrid(row: number, col: number, arr: number[]) {
        var arrIndex = 0
        var gridCol: number, gridRow: number, tmpIndex: number, tmp: number

        for (let i = 0; i < 3; i++) {
            gridRow = 3 * row + i

            for (let j = 0; j < 3; j++) {
                gridCol = 3 * col + j

                tmpIndex = arrIndex
                while (this.grid[gridRow].findIndex((obj) => obj === arr[arrIndex]) > -1 ||
                    [
                        this.grid[0][gridCol],
                        this.grid[1][gridCol],
                        this.grid[2][gridCol],
                        this.grid[3][gridCol],
                        this.grid[4][gridCol],
                        this.grid[5][gridCol],
                        this.grid[6][gridCol],
                        this.grid[7][gridCol],
                        this.grid[8][gridCol]
                    ].findIndex((obj) => obj === arr[arrIndex]) > -1) {
                    tmpIndex++
                    if (tmpIndex === 9)
                        return false

                    tmp = arr[arrIndex]
                    arr[arrIndex] = arr[tmpIndex]
                    arr[tmpIndex] = tmp
                }
                this.grid[gridRow][gridCol] = arr[arrIndex]
                arrIndex++
            }
        }
        return true
    }

    shuffleArray() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        var index = 8
        var rndIndex, tmp
        while (index > 0) {
            rndIndex = Math.floor(Math.random() * (index + 1))
            tmp = arr[index]
            arr[index] = arr[rndIndex]
            arr[rndIndex] = tmp
            index--
        }

        return arr
    }
}