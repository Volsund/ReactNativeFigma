import React, { ReactNode } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar, Image } from 'react-native';

interface Props {
    title: string;
    active: boolean;
}

const NavigationTab: React.FC<Props> = ({ title, active }) => {
    return (
        <View style={tabStyle.container}>
            <Image style={tabStyle.image} source={require('../components/google.jpg')} />
            <Text style={[tabStyle.text, active ? tabStyle.textActive : tabStyle.textInactive]}>{title}</Text>
        </View>
    );
};

const tabStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    text: {
        alignSelf: 'center',
        fontSize: 10,
        lineHeight: 10,
        color: '#ABB4BD',
    },
    textActive: {
        color: '#EF3651',
    },
    textInactive: {
        color: '#ABB4BD',
    },
    image: {
        height: 24,
        width:24,
    },
});

export const BottomNavigationBar: React.FC = () => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor="#00BCD4" />
            <NavigationTab title="Home" active={false} />
            <NavigationTab title="Shop" active={false} />
            <NavigationTab title="Bag" active={false} />
            <NavigationTab title="Favourites" active={false} />
            <NavigationTab title="Profile" active={false} />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
