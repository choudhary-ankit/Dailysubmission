import React, { Component } from 'react'
import './App.css'
import MobileOperation from './component/MobileOperation'
import MobileManufacure from './component/MobileManufacure'
import ButtonComponent from './component/ButtonComponent'


export default class App extends Component {
  render() {
    return (
      <div>
        <MobileOperation/>
        <MobileManufacure/>
        <ButtonComponent/>
      </div>
    )
  }
}
