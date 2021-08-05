import React from "react";
import "./Stopwatch.css";

class Stopwatch extends React.Component {

  constructor() {
    super();
    this.state = {
      mil: 0,
      sec: 0
    }
  this.stopwatch = null;
  }

  start = () => {
  clearInterval(this.stopwatch);
  this.stopwatch = setInterval(
   this.watchLoop, 10
  );
 }

  stop = () => {
  clearInterval(this.stopwatch);
 }

 reset = () => {
    this.setState({
      mil:0,
      sec:0
    })
  }

  watchLoop = () => {
    var m = this.state.mil;
    var s = this.state.sec;

    m += 1;
    if (m > 99) {
      s += 1;
      m = 0;
    }

    this.setState({
      mil:m,
      sec:s
    });
  }

  render() {
    var mil = this.state.mil;
    var sec = this.state.sec;

  if (mil <= 9) mil = "0" + mil;
  if (sec <= 9) sec = "0" + sec;

    return (
      <main>
        <h3>React Stopwatch</h3>
        <section>
          <h1>
            {sec}.<span>{mil}</span>
          </h1>
        </section>
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </main>
    );
  }

}

export default Stopwatch;