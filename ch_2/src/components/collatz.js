import React, { Component } from 'react';


export default class Collatz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textPlaceholder: '',
      sequence: []
    };
  }

  calcSequence = () => {
    let sequence = []
    let val = parseInt(this.state.textPlaceholder, 10);
    while (val != 1 && sequence.length < 1000) {
      sequence.push(val);
      console.log(val);
      if (val % 2) {
        val = 3 * val + 1;
      } else {
        val /= 2;
      }
    }
    if (sequence.length && sequence.length != 1000) {
      sequence.push(1)
    }
    this.setState({ sequence });
  }

  onChangeText = e => {
    this.setState({
      textPlaceholder: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

    if (!isNaN(this.state.textPlaceholder)) {
      this.calcSequence();
    }
  }

  render() {
    var labelStyle = {
      fontFamily: "cursive",
      fontWeight: "bold",
      textAlign: "center",
      padding: 6,
      margin: '8%',
      height: '20%',
    };
    console.log(this.state.sequence)
    return (
      <div>
        <p style={labelStyle}>
          The Collatz conjecture is a conjecture in mathematics that concerns a sequence defined as follows:
          start with any positive integer n. Then each term is obtained from the previous term as follows:
          if the previous term is even, the next term is one half of the previous term. If the previous term is odd,
          the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n,
          the sequence will always reach 1.
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label style={{ color: 'black' }}>Enter an integer: </label>
            <input type="text"
              className="form-control"
              value={this.state.textPlaceholder}
              onChange={this.onChangeText}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Calculate Collatz Sequence" className="btn btn-primary" />
          </div>
        </form>
        {
          this.state.sequence.map(num => (<p>{num}</p>))
        }
      </div>

    );
  }
}