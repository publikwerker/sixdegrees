import React from 'react';

export default class Display extends React.Component{

  render(){
    return(
      <div className="display__container">
        <p className="display__text">
          {this.props.value}
        </p>
      </div>
    )
  }
}