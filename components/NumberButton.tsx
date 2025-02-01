import { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    numberButton: {
        display: 'flex',
        width: Dimensions.get('window').width / 10,
        height: Dimensions.get('window').width / 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    numberButtonText: {
        color: 'black',
        fontFamily: 'monospace',
        fontSize: Dimensions.get('window').width / 15
    }
})

interface NumberButtonProps {
    activeCol: number,
    activeRow: number,
    setCellValue: any,
    buttonVal: number
}

export default class NumberButton extends Component<NumberButtonProps, {}> {
    constructor(props: NumberButtonProps) {
        super(props)
    }

    render() {
        return <TouchableOpacity
            onPress={() => this.props.setCellValue(this.props.activeCol, this.props.activeRow, this.props.buttonVal)}
        >
            <View
                style={[style.numberButton, {
                    backgroundColor: this.props.buttonVal > 0 ? 'white' : 'orange'
                }]}
            >
                <Text style={[
                    style.numberButtonText,
                    this.props.buttonVal === 0 ? {color: 'white'} : {}
                ]}>{this.props.buttonVal > 0 ? this.props.buttonVal : 'X'}</Text>
            </View>
        </TouchableOpacity>
    }
}