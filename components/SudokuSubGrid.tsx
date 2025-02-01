import { Component } from "react"
import { StyleSheet, View } from "react-native"

import SudokuCell from "./SudokuCell"

const style = StyleSheet.create({
    sudokuSubGrid: {
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    sudokuSubGridCol: {
        display: 'flex',
        flexDirection: 'column'
    },
    sudokuSubGridRow: {
        display: 'flex',
        flexDirection: 'row'
    }
})

interface SudokuSubGridProps {
    grid: number[][],
    fixedCells: number[],
    activeCol: number,
    activeRow: number,
    activeValue: number,
    setActiveCell: any,
    setCellValue: any,
    sub_col: number,
    sub_row: number
}

export default class SudokuSubGrid extends Component<SudokuSubGridProps, {}> {
    render() {
        return <View style={style.sudokuSubGrid}>
            <View style={style.sudokuSubGridCol}>
                {Array.from(Array(3)).map((_, row_index) => (
                    <View style={style.sudokuSubGridRow} key={row_index}>
                        {Array.from(Array(3)).map((_, col_index) => (
                            <SudokuCell
                                fixedCells={this.props.fixedCells}
                                activeCol={this.props.activeCol}
                                activeRow={this.props.activeRow}
                                activeValue={this.props.activeValue}
                                setActiveCell={this.props.setActiveCell}
                                cellVal={this.props.grid[3 * this.props.sub_col + col_index][3 * this.props.sub_row + row_index]}
                                setCellVal={this.props.setCellValue}
                                row={3 * this.props.sub_row + row_index}
                                col={3 * this.props.sub_col + col_index}
                                key={col_index}
                            ></SudokuCell>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    }
}