import { Component } from "react";

import "@/components/styles/number-button.css"

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
        return <div 
            className="number-button" 
            onClick={() => this.props.setCellValue(this.props.activeCol, this.props.activeRow, this.props.buttonVal)}
            style={{
                backgroundColor: this.props.buttonVal > 0 ? 'white' : 'orange'
            }}
        >
            {this.props.buttonVal > 0 ? this.props.buttonVal : 'X'}
        </div>
    }
}