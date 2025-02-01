import { Component } from "react";
import { Text, View } from "react-native";
import SudokuGrid from "@/components/SudokuGrid";
import NumberPanel from "@/components/NumberPanel";
import ResetButton from "@/components/ResetButton";
import GridGenerator from "@/scripts/GenerateGrid";

interface IndexState {
  activeCol: number,
  activeRow: number,
  activeValue: number,
  grid: number[][]
}

export default class Index extends Component<{}, IndexState> {
  gridGenerator = new GridGenerator()
  fixedCells: number[]

  constructor(props: any) {
    super(props)

    this.fixedCells = new Array(30)
    var generateNewGrid: boolean = true
    var initGrid: number[][] = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    var newGrid: number[][] = initGrid
    var sum: number

    while (generateNewGrid) {
      generateNewGrid = false
      newGrid = this.gridGenerator.GenerateGrid()

      for (let i = 0; i < 9; i++) {
        sum = 0
        for (let j = 0; j < 9; j++) {
          sum += newGrid[i][j]
        }
        if (sum < 45) {
          generateNewGrid = true
          break
        }
      }
    }

    var row: number, col: number

    for (let j = 0; j < 30; j++) {
      row = Math.floor(Math.random() * 9)
      col = Math.floor(Math.random() * 9)

      while (initGrid[row][col] > 0) {
        row = Math.floor(Math.random() * 9)
        col = Math.floor(Math.random() * 9)
      }


      initGrid[row][col] = newGrid[row][col]
      this.fixedCells[j] = 10 * row + col
    }

    this.state = {
      activeCol: -1,
      activeRow: -1,
      activeValue: 0,
      grid: initGrid
    }
  }
  
  resetGrid = () => {
    this.fixedCells = new Array(30)
    var generateNewGrid: boolean = true
    var initGrid: number[][] = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    var newGrid: number[][] = initGrid
    var sum: number

    while (generateNewGrid) {
      generateNewGrid = false
      newGrid = this.gridGenerator.GenerateGrid()

      for (let i = 0; i < 9; i++) {
        sum = 0
        for (let j = 0; j < 9; j++) {
          sum += newGrid[i][j]
        }
        if (sum < 45) {
          generateNewGrid = true
          break
        }
      }
    }

    var row: number, col: number

    for (let j = 0; j < 30; j++) {
      row = Math.floor(Math.random() * 9)
      col = Math.floor(Math.random() * 9)

      while (initGrid[row][col] > 0) {
        row = Math.floor(Math.random() * 9)
        col = Math.floor(Math.random() * 9)
      }


      initGrid[row][col] = newGrid[row][col]
      this.fixedCells[j] = 10 * row + col
    }

    this.setState({
      activeCol: -1,
      activeRow: -1,
      activeValue: 0,
      grid: initGrid
    })
  }

  setActiveCell = (col: number, row: number) => {
    this.setState({
      activeCol: col,
      activeRow: row,
      activeValue: this.state.grid[col][row]
    })
  }

  setCellValue = (col: number, row: number, val: number) => {
    var newGrid = this.state.grid
    newGrid[col][row] = val

    this.setState({
      grid: newGrid,
      activeValue: val
    })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'black'
        }}
      >
        <SudokuGrid
          grid={this.state.grid}
          fixedCells={this.fixedCells}
          setCellValue={this.setCellValue}
          activeCol={this.state.activeCol}
          activeRow={this.state.activeRow}
          activeValue={this.state.activeValue}
          setActiveCell={this.setActiveCell}
        ></SudokuGrid>
        <NumberPanel
          fixedCells={this.fixedCells}
          activeCol={this.state.activeCol}
          activeRow={this.state.activeRow}
          setCellValue={this.setCellValue}
        ></NumberPanel>
        <ResetButton
          resetGrid={this.resetGrid}
        ></ResetButton>
      </View>
    );
  }
}
