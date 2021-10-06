import React from 'react';
import { View} from 'react-native';

const Obstacles = ({ 
        obstaclesLeft, 
        obstaclesWidth, 
        obstaclesHeight, 
        gap, 
        randomBottom 
    }) => {
    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstaclesWidth,
                height: obstaclesHeight,
                bottom: randomBottom + obstaclesHeight + gap,
                left: obstaclesLeft,
            }}/>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstaclesWidth,
                height: obstaclesHeight,
                bottom: randomBottom,
                left: obstaclesLeft,
            }}/>
        </>
    );
};

export default Obstacles;