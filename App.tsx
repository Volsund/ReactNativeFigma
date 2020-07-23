import React, { useState } from 'react';
import {
    ScrollView,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import storybook from './storybook';
import { Hello } from './src/components';

const IS_STORYBOOK = true;

function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IS_STORYBOOK ? storybook : App;