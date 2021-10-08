import React from 'react';
import { Image } from 'react-native';
import pipe from '../assets/sprites/pipe-green.png'

const Obstacles = ({ 
        obstaclesLeft, 
        obstaclesWidth, 
        obstaclesHeight, 
        gap, 
        randomBottom 
    }) => {
    return (
        <>
            <Image 
                style={{
                    position: 'absolute',
                    width: obstaclesWidth,
                    height: obstaclesHeight,
                    bottom: randomBottom + obstaclesHeight + gap,
                    left: obstaclesLeft,
                    resizeMode: 'stretch',
                    transform:[{ rotateX: '180deg' }]
                }}
                source={pipe}
            />
            <Image 
                style={{
                    position: 'absolute',
                    width: obstaclesWidth,
                    height: obstaclesHeight,
                    bottom: randomBottom,
                    left: obstaclesLeft,
                    resizeMode: 'stretch',
                }}
                source={pipe}
            />
        </>
    );
};

export default Obstacles;