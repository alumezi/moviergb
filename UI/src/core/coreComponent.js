import React, { Component } from 'react';
import '../style/coreStyle.css';
import Color from './color';
import MainPoster from './mainPoster';


class App extends Component {

    constructor(){
        super();
        this.state={
            arrayOfColors : ["rgb(34,34,34)", "rgb(84,34,34)", "rgb(34,54,34)", "rgb(34,34,311)", "white", "black", "teal", "brown", "white", "teal"],
            url : "https://www.avsforum.com/wordpress/wp-content/uploads/2017/07/Dunkirk.jpg"
        }
    }

  render() {
    return(
      <div className="ui" >
        <MainPoster props={this.state.url}/>
        

        <div className="colorContainer">
        {this.state.arrayOfColors.map((item)=>{ return <Color props={item} key={item}/> })}
        </div>
      </div>
    )
    
  }
}

export default App;
