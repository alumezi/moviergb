import React from 'react';
import '../style/coreStyle.css';


const mainPoster = (props) => {
    console.log(props.props)
        return (
            <div className="mainPoster">
            <img alt="moviePoster" src={props.props} />
            </div>
        )
}

export default mainPoster;
