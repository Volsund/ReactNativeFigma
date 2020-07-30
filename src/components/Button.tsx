import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    title: string;
    onPress: () => void;
}

export const Button: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            {/* Gradient button */}
            <LinearGradient
                // Button Linear Gradient
                colors={['white', 'black']}
                style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
            >
                <Text
                    style={{
                        backgroundColor: 'transparent',
                        fontSize: 15,
                        color: '#fff',
                    }}
                >
                    Press Me
                </Text>
            </LinearGradient>
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
