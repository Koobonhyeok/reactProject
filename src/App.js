import React, { Component } from 'react'

class App extends Component{
  state = {
    Message : 'Message Memo'
  }
  changeMessage = () =>{
    this.setState({
      Message : 'Change Message'
    })
  }
  render(){
    return <div>
            <p>{this.state.Message}</p>
            <button onClick={this.changeMessage}>Click Alert</button>
            </div>
  }
}

export default App;