import React from 'react';
import logo from './logo.png';
import Button from'react-bootstrap/Button';
import './App.css';

class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.initCount,
      fizzBuzz: ''
    };
  }

  // sets the "Fizz", "Buzz", or "FizzBuzz"
  _fizzBuzzCheck(num) {
    let msg = '';

    if (num % 3 === 0) {
      msg = 'Fizz';
    }

    if (num % 5 === 0) {
      msg += 'Buzz';
    }

    this.setState({fizzBuzz: msg});
  }

  // decrement state counter
  _decrement() {
    // cannot decrement below 1
    if (this.state.counter > 1) {
      this.setState({count: --this.state.counter});
      this._fizzBuzzCheck(this.state.counter);
    }
  }

  // increment state counter
  _increment() {
    // cannot increment above 100
    if (this.state.counter < 100) {
      this.setState({count: ++this.state.counter});
      this._fizzBuzzCheck(this.state.counter);
    }
  }

  componentDidMount() {
    // on init get the fizzBuzz message
    this._fizzBuzzCheck(this.props.initCount);
  }

  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <h2>{this.state.fizzBuzz}&nbsp;</h2>
        </div>
        <div class="row justify-content-center">
          <h1 class="display-4">{this.state.counter}</h1>
        </div>

        <div class="row justify-content-center">
            <Button variant="outline-secondary" size="sm" onClick={this._decrement.bind(this)}>
              -
            </Button>
            <Button variant="outline-success" size="sm" onClick={this._increment.bind(this)}>
              +
            </Button>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFizzBuzzStarted: false};

    this.handleStartFizzBuzzClick = this.handleStartFizzBuzzClick.bind(this);
  }

  handleStartFizzBuzzClick( ) {
    this.setState(state => ({
      isFizzBuzzStarted: !state.isFizzBuzzStarted
    }));
  }
  render() {
    const initNum  = Math.floor( ( Math.random( ) * 10 ) + 1 );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 class="display-4">Welcome to FizzBuzz</h1>
          <p class="lead text-muted">
            A simple react application that display "Fizz" if a generated number is divisible by 3. Display "Buzz" if a generated number is divisible by 5, and finally display "FizzBuzz" if a generated number is divisbile by both 3 and 5.
          </p>
        </header>

        <div class="container">
          {this.state.isFizzBuzzStarted ? (
            <FizzBuzz initCount={initNum}/>
          ) :
          (
            <div class="row justify-content-center">
              <Button variant="outline-success" size="lg" onClick={this.handleStartFizzBuzzClick}>Start</Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
