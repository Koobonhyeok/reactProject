import React, { Component } from 'react'
import Header from './components/main/Header';
import MainPage from './components/main/MainPage';
import moment from 'moment';

class App extends Component{
  state ={
    calendarYM : moment(),
    today : moment(),
    clickDay : moment()
  }
  moveMonth = (month) =>{
    this.setState({
      calendarYM : this.state.calendarYM.add(month, 'M')
    })
  }
  changeDay=(clickDay)=>{
    this.setState({
      clickDay : clickDay
    })
  }
  render(){
    return (
      <div className='test-layout'>
        <div className='RCA-app-container'>
          <Header calendarYM={this.state.calendarYM.format("YYYY년 MM월")}
                  today={this.state.today.format("현재 YYYY - MM - DD")} 
                  moveMonth={this.moveMonth}
                  />
          <MainPage YM={this.state.calendarYM.format("YYYY-MM-DD")}
                    clickDay={this.state.clickDay.format("YYYY-MM-DD")}
                    changeDay={this.changeDay}
                    />
        </div>
    </div>
    )
    
  }
}

export default App;