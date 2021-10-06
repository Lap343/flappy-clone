import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Obstacles from './components/Obstacles';
import Bird from './components/Bird';

const App = () => {

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const [ birdBottom, setBirdBottom ] = useState(screenHeight / 2);
  const [ obstaclesLeft, setObstaclesLeft ] = useState(screenWidth);

  const birdLeft = screenWidth / 2;
  const obstaclesWidth = 60;
  const obstaclesHeight = 300;
  const gravity = 3;
  const gap = 200;

  let gameTimerId;
  let obstaclesLeftTimerID;

  useEffect(() => {
    if(birdBottom > 0){
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      } 
    } else {
      setObstaclesLeft(screenWidth);
    };
  }, [birdBottom]);

  //obsticles
  useEffect(() => {
    if(obstaclesLeft > -obstaclesWidth){
      obstaclesLeftTimerID = setInterval(() => {
        setObstaclesLeft(obstaclesLeft -5);
      }, 30);
    };

    return () => {
      clearInterval(obstaclesLeftTimerID);
    }
  }, [obstaclesLeft]);

  return (
    <View style={styles.container}>
      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles 
        obstaclesLeft={obstaclesLeft}
        obstaclesWidth={obstaclesWidth}
        obstaclesHeight={obstaclesHeight}
        gap={gap}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;