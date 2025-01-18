import { Component } from "react"
import "@/components/styles/sudoku-grid.css"

import SudokuSubGrid from "./SudokuSubGrid"

interface SudokuGridProps {
    grid: number[][],
    fixedCells: number[],
    setCellValue: any,
    activeCol: number,
    activeRow: number,
    setActiveCell: any
}

export default class SudokuGrid extends Component<SudokuGridProps, {}> {
    constructor(props: SudokuGridProps) {
        super(props)
    }

    render() {
        return <div className="sudoku-grid-col">
            {Array.from(Array(3)).map((_, row_index) => (
                <div className="sudoku-grid-row" key={row_index}>
                    {Array.from(Array(3)).map((_, col_index) => (
                        <SudokuSubGrid
                            grid={this.props.grid}
                            fixedCells={this.props.fixedCells}
                            setCellValue={this.props.setCellValue}
                            activeCol={this.props.activeCol}
                            activeRow={this.props.activeRow}
                            setActiveCell={this.props.setActiveCell}
                            sub_col={col_index}
                            sub_row={row_index}
                            key={col_index}
                        ></SudokuSubGrid>
                    ))}
                </div>
            ))}
        </div>
    }
}