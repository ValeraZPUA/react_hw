import React, { Component } from 'react';
import styles from './Counter.module.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  plusOne = () => {
    this.setState({
      counter: ++this.state.counter,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div className={styles.counterContainer}>
        <h1>{`${counter}`}</h1>
        <button onClick={this.plusOne}>CLICK ME!!!</button>
      </div>
    );
  }
}
