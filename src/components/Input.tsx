import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
interface Props {
    label: string;
    focused?: boolean;
}
export const Input: React.FC<Props> = ({ label, focused = false }) => {
    const [isFocused, setFocused] = useState<boolean>(focused);
    const [value, setValue] = useState<string>('');
    return (
        <View style={style.container}>
            {isFocused && <Text style={style.label}>{label}</Text>}
            <TextInput
                style={style.text}
                placeholderTextColor="#ABB4BD"
                value={value}
                placeholder={label} 
                onChange={it => setValue(it.nativeEvent.text)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        backgroundColor: '#2A2C36',
        borderRadius: 4,
        height: 64,
    },
    text: {
        color: '#F5F5F5',
        fontSize: 14,
        lineHeight: 20,
        paddingHorizontal: 20,
        paddingVertical: 22,
        textAlignVertical: 'top',
    },
    label: {
        paddingTop: 12,
        paddingLeft: 20,
        color: '#ABB4BD',
    },
});
