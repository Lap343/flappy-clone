import React from 'react';
import { Image } from 'react-native';
import flappy from '../assets/sprites/yellowbird-midflap.png'

const Bird = ({ birdBottom, birdLeft }) => {
    const birdWidth = 50;
    const birdHeight = 60;

    return (
        <Image 
            style={{
                position: 'absolute',
                width: birdWidth,
                height: birdHeight,
                bottom: birdBottom - ( birdHeight / 2 ),
                left: birdLeft - ( birdWidth / 2 ),
            }}
            source={flappy}
            resizeMode={'contain'}
        />
    );
};

export default Bird;