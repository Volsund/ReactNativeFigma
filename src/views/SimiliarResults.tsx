import React from 'react';
import { StatusBar, StyleSheet, ScrollView, Text, View, Image } from 'react-native';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Finding similar results... </Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
        fontWeight: 'bold',
        paddingTop: 22,
        alignItems: 'center',
        textAlign: 'center',
    },
});

export const SimilarResults: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1, alignItems:'center', paddingTop:200 }}>
                    <Image source={require('../views/search.png')} />
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
