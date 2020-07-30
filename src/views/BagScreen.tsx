import React from 'react';
import { StatusBar, StyleSheet, ScrollView, Text, View } from 'react-native';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>My Bag</Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
        paddingTop: 50,
    },
});

export const BagScreen: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
});
