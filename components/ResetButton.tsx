import { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    resetButton: {
        display: 'flex',
        height: Dimensions.get('window').width / 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        marginTop: Dimensions.get('window').width / 20,
        // padding: Dimensions.get('window').width / 20
    },
    resetButtonText: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: Dimensions.get('window').width / 15,
        marginHorizontal: Dimensions.get('window').width / 20
    }
})

interface ResetButtonProps {
    resetGrid: any
}

export default class ResetButton extends Component<ResetButtonProps, {}> {
    constructor(props: ResetButtonProps) {
        super(props)
    }

    render() {
        return <TouchableOpacity
            onPress={() => this.props.resetGrid()}
        >
            <View style={[
                style.resetButton
            ]}>
                <Text style={[
                    style.resetButtonText
                ]}>RESET</Text>
            </View>
        </TouchableOpacity>
    }
}