import React, { Component } from "react";
import "./App.css";
import List from "./components/ListStaffs";
import { STAFFS } from "./shared/staffs"

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      STAFFS : STAFFS
    }
  }
  render(){
    return (
      <div className="App">
         <List STAFFS={this.state.STAFFS} />
      </div>
    );
  }
}
  


export default App;
