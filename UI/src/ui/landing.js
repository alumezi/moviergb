import React, { Component } from 'react';
import '../style/coreStyle.css';
import Thumbnail from './thumbnail';

class App extends Component {

    constructor(){
        super();
        this.state={
            arr : [
                {url : "https://images-na.ssl-images-amazon.com/images/I/91FmXNdDCfL._SY679_.jpg", id:1},
                {url : "https://m.media-amazon.com/images/M/MV5BMTc5MDY3NTcxOF5BMl5BanBnXkFtZTgwMTk2NTc5NTM@._V1_SY1000_CR0,0,675,1000_AL_.jpg", id:2},
                {url : "https://m.media-amazon.com/images/M/MV5BMTkxMDQzMTczN15BMl5BanBnXkFtZTgwMDk2NTc5NTM@._V1_SY1000_CR0,0,694,1000_AL_.jpg", id:3},
                {url : "https://m.media-amazon.com/images/M/MV5BMTE0ODc2NjU5NjJeQTJeQWpwZ15BbWU4MDg4NjU3OTUz._V1_SY1000_CR0,0,675,1000_AL_.jpg", id:4},
                {url : "https://m.media-amazon.com/images/M/MV5BMjMzMTc5MjQxNl5BMl5BanBnXkFtZTgwNzg2NTc5NTM@._V1_SY1000_SX694_AL_.jpg", id:5},
                {url : "https://m.media-amazon.com/images/M/MV5BNjUwMTI4ODA0Ml5BMl5BanBnXkFtZTgwNTg2NTc5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", id:6},
                {url : "https://m.media-amazon.com/images/M/MV5BNDkxMDExMTk2OV5BMl5BanBnXkFtZTgwMTg2NTc5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", id:7},
                {url : "https://m.media-amazon.com/images/M/MV5BMjIwNDE5NTgzOF5BMl5BanBnXkFtZTgwMTI0MzY5NTM@._V1_SY1000_CR0,0,685,1000_AL_.jpg", id:8},
                {url : "https://m.media-amazon.com/images/M/MV5BNDQ5MTI1MTY4Nl5BMl5BanBnXkFtZTgwNjA5ODU5NTM@._V1_.jpg", id:9},
                {url : "https://m.media-amazon.com/images/M/MV5BODI0MTIwNzE0MV5BMl5BanBnXkFtZTgwOTYxOTQ5NTM@._V1_SY1000_SX720_AL_.jpg", id:10},
                {url : "https://m.media-amazon.com/images/M/MV5BMjI3NzY0OTU2MV5BMl5BanBnXkFtZTgwNTA5ODU5NTM@._V1_.jpg", id:11},
                {url : "https://m.media-amazon.com/images/M/MV5BMTU2ODc1Njk1Nl5BMl5BanBnXkFtZTgwODQzMzY5NTM@._V1_SY1000_CR0,0,684,1000_AL_.jpg", id:12},
                {url : "https://m.media-amazon.com/images/M/MV5BMTAzNzkyMTEyNTBeQTJeQWpwZ15BbWU4MDQ2MTk0OTUz._V1_SY1000_CR0,0,647,1000_AL_.jpg", id:13},
                {url : "https://m.media-amazon.com/images/M/MV5BMTgyOTUwNzg1N15BMl5BanBnXkFtZTgwMzI0MzY5NTM@._V1_.jpg", id:14}
            ]
        }
    }

  render() {
    return(
        <div className="landing" >
            {this.state.arr.map((object)=>{ return <Thumbnail props={object.url} key={object.id} id={object.id} style={{flexGrow: 1}}/>   })}
        </div> 

    )
    
  }
}

export default App;
