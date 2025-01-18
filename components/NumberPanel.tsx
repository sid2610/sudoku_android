import { Component } from "react";
import NumberButton from "./NumberButton";

import "@/components/styles/number-panel.css"

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
        return <div className={this.props.activeCol < 0 ? 'number-panel-col number-panel-col-disable' : 'number-panel-col'}>
            {Array.from(Array(2)).map((_, row_index) => (
                <div className="number-panel-row" key={row_index}>
                    {Array.from(Array(5)).map((_, col_index) => (
                        <NumberButton
                            activeCol={this.props.activeCol}
                            activeRow={this.props.activeRow}
                            setCellValue={this.props.setCellValue}
                            buttonVal={5 * row_index + col_index}
                            key={col_index}
                        ></NumberButton>
                    ))}
                </div>
            ))}
        </div>
    }
}