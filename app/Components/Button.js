import React from 'react'
import { Component, PropTypes } from 'react'

export default class Button extends Component{

  clickBtn(e){
    e.preventDefault();
    alert("clicked");
  }

  render()
  {
    return (
      <div>
        <a onClick={this.clickBtn} href="#"> click me </a>
      </div>
    )
  }
}
