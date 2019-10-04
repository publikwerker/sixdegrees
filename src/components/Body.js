import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  
  setError = (error) => {
    console.log("setError ran");
    this.setState({
      error
    })
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("handle submit ran");
    } catch (error) {
      this.setError(error.message);
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
        </form>
      </div>
    )
  }
}