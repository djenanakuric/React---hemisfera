import React from 'react';
import North from './North.png';
import South from './South.jpg';

const hemisphereConfig = {
    Southern: {
        text: 'It is southern hemisphere!',
        picture: South
    },
    Northern: {
        text: 'It is northern hemisphere!',
        picture: North
    }
}
const HemisphereDisplay = (props) => {

    const hemisphere = props.latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere];

    return (
        <div>
            <img src={picture} alt="hemisphere picture" />
            {text}
        </div>
    )

}

export default HemisphereDisplay;
