import { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Slider } from "react-native-elements";

const style = StyleSheet.create({
    sliderThumb: {
        display: 'flex',
        height: Dimensions.get('window').width / 20,
        width: Dimensions.get('window').width / 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderThumbText: {
        color: 'white',
        fontFamily: 'monospace',
        fontSize: Dimensions.get('window').width / 30
    }
})

interface DifficultySliderProps {
    visibleCells: number,
    adjustDifficulty: any
}

export default class DifficultySlider extends Component<DifficultySliderProps, {}> {
    render() {
        return (
            <Slider
                value={this.props.visibleCells}
                maximumValue={50}
                minimumValue={20}
                step={1}
                onValueChange={value => this.props.adjustDifficulty(value)}
                style={{
                    marginTop: Dimensions.get('window').width / 40
                }}
                trackStyle={{
                    width: Dimensions.get('window').width * 0.7
                }}
                thumbStyle={{
                    height: Dimensions.get('window').width / 20,
                    width: Dimensions.get('window').width / 20,
                    backgroundColor: 'teal'
                }}
                minimumTrackTintColor="white"
                maximumTrackTintColor="white"
                thumbProps={{
                    children: (
                        <View
                            style={style.sliderThumb}
                        >
                            <Text
                                style={style.sliderThumbText}
                            >{this.props.visibleCells}</Text>
                        </View>
                    )
                }}
            ></Slider>
        )
    }
}