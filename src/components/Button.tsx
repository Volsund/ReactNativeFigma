import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EF3651',
        borderRadius: 25,
        alignItems: 'center',
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 14,
        textTransform: 'uppercase',
    },
});
