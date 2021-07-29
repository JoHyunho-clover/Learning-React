import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      Hello World!
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

function FuncComp(props){
  var [number, setNumber]=useState(props.initNumber);
  var [date, setDate]=useState((new Date()).toString())
  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random())
          }
        }></input>
        <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString());
          }
        }></input>
    </div>
  );
}


class ClassComp extends Component{
  state={
    number:this.props.initNumber,
    date: (new Date()).toString()
  }
  render(){
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()});
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
