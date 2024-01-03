import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age: number
}

interface IState {
  height: number
}

export default class demo1 extends PureComponent<IProps, IState> {
  state = {
    height: 1.88
  }
  // constructor(props: IProps) {
  //   super(props)

  //   this.state = {
  //     height: 1.88
  //   }
  // }
  render() {
    return (
      <div>
        <h3>demo1</h3>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>{this.state.height}</div>
      </div>
    )
  }
}
