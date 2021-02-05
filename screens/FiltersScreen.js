import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
      <Button title="Home" onPress={() => {
        props.navigation.popToTop({});
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen;
