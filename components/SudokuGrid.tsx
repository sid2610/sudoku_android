import { Component } from "react"
import { View, StyleSheet } from "react-native"

import SudokuSubGrid from "./SudokuSubGrid"

const style = StyleSheet.create({
    sudokuGridRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    sudokuGridCol: {
        display: 'flex',
        flexDirection: 'column'
    }
})

interface SudokuGridProps {
    grid: number[][],
    fixedCells: number[],
    setCellValue: any,
    activeCol: number,
    activeRow: number,
    activeValue: number,
    setActiveCell: any
}

export default class SudokuGrid extends Component<SudokuGridProps, {}> {
    constructor(props: SudokuGridProps) {
        super(props)
    }

    render() {
        return <View style={style.sudokuGridCol}>
            {Array.from(Array(3)).map((_, row_index) => (
                <View style={style.sudokuGridRow} key={row_index}>
                    {Array.from(Array(3)).map((_, col_index) => (
                        <SudokuSubGrid
                            grid={this.props.grid}
                            fixedCells={this.props.fixedCells}
                            setCellValue={this.props.setCellValue}
                            activeCol={this.props.activeCol}
                            activeRow={this.props.activeRow}
                            activeValue={this.props.activeValue}
                            setActiveCell={this.props.setActiveCell}
                            sub_col={col_index}
                            sub_row={row_index}
                            key={col_index}
                        ></SudokuSubGrid>
                    ))}
                </View>
            ))}
        </View>
    }
}