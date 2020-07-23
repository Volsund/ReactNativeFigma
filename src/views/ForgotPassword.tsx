import React from 'react';
import { StatusBar, StyleSheet, ScrollView, Text, View, Alert } from 'react-native';
import { Input, Button } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Forgot password </Text>
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

export const ForgotPassword: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#1E1F28" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>

                <View style={{ flex: 5 }}>
                    <Text style={style.infotext}>
                        Please, enter your email address. You will receive a link to create a new password via email.
                    </Text>
                    <View style={{ paddingBottom: 70 }}>
                        <Input label="Email" />
                    </View>
                    <Button title="LOGIN" onPress={() => Alert.alert('Logged in!')} />
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
    infotext: {
        color: '#F7F7F7',
        fontSize: 14,
        lineHeight: 20,
        paddingTop: 87,
        paddingBottom: 16,
    },
});
