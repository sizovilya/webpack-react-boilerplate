
import React from 'react'
import { Component, PropTypes } from 'react'
import Button from './Components/Button'

export default class App extends Component {
  render() {
    return (
      <div>
        <div> Привет из App который на React !! </div>
        <Button/>
      </div>
    )
  }
}
