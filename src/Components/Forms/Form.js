import React from 'react'

import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props){
    super()
    this.state = {
      {...props}
    }
  }
  render() {
    return (
      Object.keys(this.state).map((field, i) => {
        <input onChange={this.onchange} type="text"></input>
      })}{

      }
      <div>
        
      </div>
    )
  }
}
