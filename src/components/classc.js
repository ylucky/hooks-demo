import React from "react";

export default class ClassCom extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  componentDidMount() {
    this.log();
  }
  componentDidUpdate() {
    this.log();
  }
  log = () => {
    const { count } = this.state;
    if (count % 2 == 0) {
      console.log("count", count);
    }
  };
  render() {
    const { count } = this.state;
    return (
      <h3>
        ClassCom {count} <button onClick={this.add}>dianji</button>
      </h3>
    );
  }
}
