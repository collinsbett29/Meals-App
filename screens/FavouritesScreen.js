import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreen = props => {
    return (
        <View style={style.screen}>
            <Text>Favourites Meal Screen!</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouritesScreen;
