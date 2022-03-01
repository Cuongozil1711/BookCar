import * as React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../../components/context';
export default function Welcome({props}) {
    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
          <Text style={styles.colorText}>Location</Text>
          <Text style={styles.colorText1}>Nam Dinh</Text>
        </View>
      );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    stretch: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    colorText: {
        color: '#c3c3c3',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left'
    },

    colorText1: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    }
});