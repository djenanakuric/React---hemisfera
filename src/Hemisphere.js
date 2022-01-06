import React from 'react';
import North from './North.png';
import South from './South.jpg';

const HemisphereDisplay = (props) => {

    const hemisphere = props.latitude > 0 ? 'Northern hemisphere!' : 'Southern hemisphere!';
    const picture = props.latitude > 0 ? North : South;
    return (
        <div>
            <img src={picture} alt="" />
            {hemisphere}
        </div>
    )

}

export default HemisphereDisplay;