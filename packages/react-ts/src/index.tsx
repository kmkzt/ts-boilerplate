import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Counter } from '@/components/Counter'

interface Props {}
export class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  public state = {
    count: 0
  }

  public increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  public decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  public reset = () => {
    this.setState({
      count: 0
    })
  }

  public render(): JSX.Element {
    const { count } = this.state
    return (
      <Counter
        count={count}
        counterIncrement={this.increment}
        counterDecrement={this.decrement}
        counterReset={this.reset}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
