import React from 'react';
import '../style/coreStyle.css';


const thumbnail = (props) => {
    
        return (
            <div className="thumbnail" >
                <img src={props.props} alt="movie poster"/>
            </div>
        )
}

export default thumbnail;
