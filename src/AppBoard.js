import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Tile} from './Tile';
import {Grid, Col} from 'react-bootstrap';
import _ from 'lodash';

var unique = (function() {
var arr = [];
for(var i = 1; i < 101; i++)
arr.push(i);

return function() {
if(!arr.length)
  alert("Bingo! No more!");

var rand = Math.floor(Math.random() * arr.length);
var random = arr.splice(rand, 1) [0];
console.log(random);
return random;
};
})();

export class AppBoard extends Component{
  constructor(props, context) {
      super(props, context);
      this.generateNumber = this.generateNumber.bind(this);
      this.state = {
          currentNumber: null,
          currentCount: 1
      };
};

 listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
}

  renderRows() {
    var placeHolder = [];
    console.log(this.listToMatrix(this.props.data, 10));
    var tiles = this.listToMatrix(this.props.data, 10).map((rowNumbers) => {
      var n = rowNumbers.length;
      for(n = 0; n < rowNumbers.length; n++) {
        placeHolder.push(
            <Tile data={rowNumbers[n]} key={rowNumbers[n]} currentNumber={this.state.currentNumber} />
        );
      }
    });
    return placeHolder;
  }

  generateNumber() {
    this.setState({
      currentNumber: unique(),
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    var wrapper = (this.state.currentNumber === null) ? 'wrapper gray-board' : 'wrapper';
    return (
        <Grid>
            <div className={wrapper}>
                {this.renderRows()}
            </div>
            <Col md={2} xs={12} className="current-number-container">
                {
                    this.state.currentNumber ?
                      <div className="current-number">
                        <span>{this.state.currentNumber}</span>
                      </div>
                    :
                      null
                }
            </Col>
            <Col md={2} xs={12} className="button-container">
                <button onClick={this.generateNumber} className="bingo-button">Bingo!</button>
            </Col>
        </Grid>
    );
  }
};
