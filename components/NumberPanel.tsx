import { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import NumberButton from "./NumberButton";

const style = StyleSheet.create({
    numberPanelCol: {
        display: 'flex',
        flexDirection: 'column',
        gap: Dimensions.get('window').width / 30,
        marginTop: Dimensions.get('window').width / 20
    },
    numberPanelRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: Dimensions.get('window').width / 30
    },
    numberPanelDisable: {
        pointerEvents: 'none',
        opacity: 0.7
    }
})

interface NumberPanelProps {
    activeCol: number,
    activeRow: number,
    setCellValue: any
}

export default class NumberPanel extends Component<NumberPanelProps, {}> {
    constructor(props: NumberPanelProps) {
        super(props)
    }

    render() {
        return <View style={[
            style.numberPanelCol,
            this.props.activeCol===-1 ? style.numberPanelDisable : {}
        ]}>
            {Array.from(Array(2)).map((_, row_index) => (
                <View style={style.numberPanelRow} key={row_index}>
                    {Array.from(Array(5)).map((_, col_index) => (
                        <NumberButton
                            activeCol={this.props.activeCol}
                            activeRow={this.props.activeRow}
                            setCellValue={this.props.setCellValue}
                            buttonVal={5 * row_index + col_index}
                            key={col_index}
                        ></NumberButton>
                    ))}
                </View>
            ))}
        </View>
    }
}