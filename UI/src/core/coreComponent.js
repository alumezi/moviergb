import React, { Component } from 'react';
import '../style/coreStyle.css';
import Color from './color';
import MainPoster from './mainPoster';


class App extends Component {

    constructor(){
        super();
        this.state={
            arrayOfColors : ["red", "green", "blue", "orange", "yellow", "black", "teal", "brown", "white", "teal"],
            url : "https://www.slashfilm.com/wp/wp-content/images/spiderman-homecoming-spidey-corner-crouch.jpg"
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
