import { Component } from "react";
import '@/components/styles/sudoku-cell.css'

interface SudokuCellProps {
    fixedCells: number[];
    activeCol: number,
    activeRow: number,
    setActiveCell: any,
    cellVal: number,
    setCellVal: any,
    row: number,
    col: number
}

export default class SudokuCell extends Component<SudokuCellProps, {}> {
    constructor(props: SudokuCellProps) {
        super(props)
    }

    isCellActive = () => {
        return this.props.activeCol === this.props.col && this.props.activeRow === this.props.row
    }

    isCellFixed = () => {
        return this.props.fixedCells.findIndex((obj) => 
            obj === 10 * this.props.col + this.props.row) > -1
    }

    render() {
        return <div
            className={this.isCellActive() ? 'sudoku-cell sudoku-cell-active' : 'sudoku-cell'}
            onClick={() => this.props.setActiveCell(this.props.col, this.props.row)}
            style={
                this.isCellFixed() ? {
                    pointerEvents: 'none',
                    color: 'orange'
                } : {}
            }
        >
            {this.props.cellVal > 0 ? this.props.cellVal : ''}
        </div>
    }
}