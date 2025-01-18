import { Component } from "react"
import "@/components/styles/sudoku-sub-grid.css"

import SudokuCell from "./SudokuCell"

interface SudokuSubGridProps {
    grid: number[][],
    fixedCells: number[],
    activeCol: number,
    activeRow: number,
    setActiveCell: any,
    setCellValue: any,
    sub_col: number,
    sub_row: number
}

export default class SudokuSubGrid extends Component<SudokuSubGridProps, {}> {
    render() {
        return <div className="sudoku-sub-grid">
            <div className="sudoku-grid-col">
                {Array.from(Array(3)).map((_, row_index) => (
                    <div className="sudoku-grid-row" key={row_index}>
                        {Array.from(Array(3)).map((_, col_index) => (
                            <SudokuCell
                                fixedCells={this.props.fixedCells}
                                activeCol={this.props.activeCol}
                                activeRow={this.props.activeRow}
                                setActiveCell={this.props.setActiveCell}
                                cellVal={this.props.grid[3 * this.props.sub_col + col_index][3 * this.props.sub_row + row_index]}
                                setCellVal={this.props.setCellValue}
                                row={3 * this.props.sub_row + row_index}
                                col={3 * this.props.sub_col + col_index}
                                key={col_index}
                            ></SudokuCell>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    }
}