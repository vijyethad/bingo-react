import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Tile extends Component{
  constructor(props, context) {
      super(props, context);
      var name = (this.props.data === this.props.currentNumber) ? 'tile active' : 'tile';
      this.state = {
          className: name
      };
};

  componentWillReceiveProps(nextProps) {
    this.setState({className: 'tile active animated pulse'});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data === nextProps.currentNumber;
  }

  render() {
    return (
      <div className={this.state.className}>
          {this.props.data}
      </div>
    );
  }
}
