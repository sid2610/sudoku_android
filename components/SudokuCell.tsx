import { Component } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const style = StyleSheet.create({
    sudokuCell: {
        display: 'flex',
        height: Dimensions.get('window').width / 10,
        width: Dimensions.get('window').width / 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    sudokuFixedCell: {
        pointerEvents: 'none',
        color: 'orange'
    },
    sudokuCellText: {
        fontSize: Dimensions.get('window').width / 15,
        fontFamily: 'monospace'
    }
})

interface SudokuCellProps {
    fixedCells: number[];
    activeCol: number,
    activeRow: number,
    activeValue: number,
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

    isActiveValue = () => {
        return this.props.activeValue > 0 && this.props.activeValue === this.props.cellVal
    }

    isCellFixed = () => {
        return this.props.fixedCells.findIndex((obj) =>
            obj === 10 * this.props.col + this.props.row) > -1
    }

    render() {
        return <TouchableOpacity
            onPress={
                () => this.props.setActiveCell(this.props.col, this.props.row)
            }
        >
            <View
                style={[ style.sudokuCell,
                    this.isCellActive() ? {backgroundColor: 'teal', shadowOpacity: 0} : {},
                    !this.isCellActive() && this.isActiveValue() ? {backgroundColor: '#606060'} : {}
                ]}
            >
                <Text style={[
                    style.sudokuCellText,
                    this.isCellFixed() ? {color: 'orange'} : {color: 'white'}
                ]}>{this.props.cellVal > 0 ? this.props.cellVal : ''}</Text>
            </View>
        </TouchableOpacity>
    }
}