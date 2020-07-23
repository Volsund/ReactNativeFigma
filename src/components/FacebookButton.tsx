import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

interface Props {
    onPress: () => void;
}

export const FacebookButton: React.FC<Props> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={require('../components/facebook.png')} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 92,
        height: 64,
        backgroundColor: 'white',
        borderRadius: 24,
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        width: 24,
        height: 24,
    },
});
