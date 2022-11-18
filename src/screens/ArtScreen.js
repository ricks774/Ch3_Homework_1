import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import { ArtDetailCard } from '../components/Card'

export default function ArtScreen(props) {

  // 設定從HomeScreen傳過來的值
  const passProps = props.route.params.passProps || 'noting get'


  return (
    <View style={styles.container}>
      <ArtDetailCard
        artImg={{ uri: passProps.RepresentImage ? passProps.RepresentImage : 'https://img.freepik.com/free-vector/hand-drawn-404-error-template_23-2147750146.jpg' }}
        artName={passProps.Name}
        artAuthor={passProps.Author}
        artIntro={passProps.Intro}
        artCity={passProps.CityName.substr(0,3)}
        artYear={passProps.BuildingYearName}
        artRate={passProps.HitRate}
        artSize={passProps.Size}
        artMaterial={passProps.Material}
        artAddress={passProps.Address}
        cardOnPress={() => props.navigation.pop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
