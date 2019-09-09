import React from 'react';
import './App.css';

class TinhTong extends React.Component{
  constructor(props) {
    super(props);
    this.state = { a : 0 , b: 0};
    this.changedA = this.changedA.bind(this);
    this.changedB = this.changedB.bind(this);
  }
  changedA(e) {
    this.setState({ a: e.target.value });
  }
  changedB(e) {
    this.setState({ b: e.target.value});
  }
  Sum()
  {
    return Number(this.state.a) + Number(this.state.b);
  }
  render(){
  return (
    
    <div className="App">
      <div className="App-header">
        <p>
          Tính tổng với <code>Reactjs</code>
        </p>
      </div>
      <div className="flexstyle">
      <input className="input1" type="number" onChange={this.changedA} defaultValue={this.state.a}/>&nbsp; &nbsp; + &nbsp; &nbsp;<input className="input1" type="number"  onChange={this.changedB} defaultValue={this.state.b}/> &nbsp; &nbsp; = &nbsp; &nbsp;
      <div
          dangerouslySetInnerHTML={ {__html: this.Sum()}}
        /></div>
    </div>
  );
  }
}

export default TinhTong;
