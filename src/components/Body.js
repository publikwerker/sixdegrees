import React from 'react';
import Sequencer from '../utils/Sequencer';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iterations: 0,
      sequence: [],
      error: null
    };
  }
  
  setError = (error) => {
    console.log("setError ran");
    console.log(error);
    this.setState({
      iterations: 0,
      sequence: [],
      error
    })
  }

  handleChange = async (event) => {
    try {
      this.setState({
        iterations: event.target.value,
        sequence: [],
        error: null,
      })
    } catch (error) {
      console.log(error);
      this.setError(error.message);
    }
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      this.getSequence(this.state.iterations);
    } catch (error) {
      console.log(error);
      this.setError(error.message);
    }
  }

  getSequence = async (number) => {
    console.log(number);
    try {
      await Sequencer(number, async (error, sequence) => {
        if (error) {
          console.log(error);
          await this.setError(error);
        } else {
          await this.setState({
            iterations: 0,
            sequence,
            error: null,
          })
        }
      });
    } catch (error){
      console.log(error);
      this.setError(error);
    }
  }

  render () {
    return (
      <div className="body__form--container">
        <h1>The Fibonacci Sequence</h1>
        <form 
        name="fibonacci-input"
        id="fibonacci-input"
        onSubmit={this.handleSubmit}>
          <label>
            <span className="body__form-input--label">
            How many iterations would you like to see?</span>
            <input type="number"
            name="body__form-input--iteration"
            placeholder=" 1 or 5, for example"
            onChange={this.handleChange} />
          </label>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    )
  }
}