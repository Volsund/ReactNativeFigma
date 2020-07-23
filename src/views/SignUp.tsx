import React from 'react';
import { StatusBar, StyleSheet, Image, ScrollView, Text, View, Alert } from 'react-native';
import { Input, Button, FacebookButton, GoogleButton } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Sign Up</Text>
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

const HelperText: React.FC = () => {
    return (
        <View style={helperStyle.container}>
            <Text style={helperStyle.text}>Already have an account?</Text>
            <Image style={helperStyle.image} source={require('../views/Vector.png')} />
        </View>
    );
};

const helperStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 16,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        color: '#F7F7F7',
        paddingLeft: 130,
        paddingBottom: 28,
    },
    image: {
        marginLeft: 8,
        marginVertical: 5,
    },
});

const Footer: React.FC = () => {
    return (
        <View style={footerStyle.container}>
            <FacebookButton onPress={() => Alert.alert('Facebook Signed Up')} />
            <GoogleButton onPress={() => Alert.alert('Google Signed Up')} />
        </View>
    );
};

const footerStyle = StyleSheet.create({
    container: {
        paddingTop:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export const SignUp: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>

                <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
                    <Input label="Name" />
                    <Input label="Email" />
                    <Input label="Password" />
                    <View>
                        <HelperText />
                    </View>
                    <Button title="Sign Up" onPress={() => Alert.alert('Sign Up')} />
                </View>
                <View style={{ flex: 2, paddingTop:50 }}>
                    <Text style={style.bottomText}>Or sign up with social account </Text>
                    <Footer />
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
    bottomText: {
        color: '#F7F7F7',
        fontSize: 14,
        lineHeight: 20,
        paddingHorizontal:69,
    },
});
