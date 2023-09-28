import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#372775',
    },

    label: {
        fontSize: 15,
        color: '#FFFFFF',
    },

    txtInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        color: '#3F92C5',
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10
    },

    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 33,
        fontWeight: 'bold'
    },

    error: {
        color: '#FD7979',
    },

    card: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 205,
        borderRadius: 10,
    },
});