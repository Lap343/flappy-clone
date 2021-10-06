import React from 'react';
import { View} from 'react-native';

const Obstacles = ({ obstaclesLeft, obstaclesWidth, obstaclesHeight, gap }) => {
    return (
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstaclesWidth,
                height: obstaclesHeight,
                bottom: 0 + obstaclesHeight + gap,
                left: obstaclesLeft,
            }}/>
            <View style={{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstaclesWidth,
                height: obstaclesHeight,
                bottom: 0,
                left: obstaclesLeft,
            }}/>
        </>
    );
};

export default Obstacles;