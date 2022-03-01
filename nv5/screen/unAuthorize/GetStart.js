import { style } from '@mui/system';
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const dataImage = {
    image4 : require('../../src/assets/hotel4.jpg'),
    image3 : require('../../src/assets/hotel3.jpg'),
    image2 : require('../../src/assets/hotel2.jpg'),
}
export default function GetStart({navigation}) {
    const onPress = () => {
        console.log("a");
        navigation.navigate('LoginScreen')
    }

    const useImage = setInterval(() => {
        console.log("image", image);
        if(dataImage.image2 === image) setImage(dataImage.image3);
        if(dataImage.image3 === image) setImage(dataImage.image4);
        if(dataImage.image4 === image) setImage(dataImage.image2);
    }, 5000)

    clearInterval(useImage);

    const [image, setImage] = useState(dataImage.image4);

    return (
        <SafeAreaView style={styles.container}>
           <StatusBar  translucent backgroundColor="transparent"/>
           <Image
            style={styles.stretch}
            source={image}
            />

            <View style={styles.active}>
                <View style={[styles.activeHover, dataImage.image2 === image ? styles.activeHoverSelect : '']}></View>
                <View style={[styles.activeHover, dataImage.image3 === image ? styles.activeHoverSelect : '']}></View>
                <View style={[styles.activeHover, dataImage.image4 === image ? styles.activeHoverSelect : '']}></View>
            </View>

            <View style={styles.findHome}>
                <View>
                    <Text style={styles.colorText}>Find your</Text>
                    <Text style={styles.colorText}>sweet home</Text>
                </View>
                <View>
                    <Text style={styles.colorText1}>Schedule visits in just a few clicks</Text>
                    <Text style={styles.colorText1}>visits in just a few clicks</Text>
                </View>
            </View>

            <View style={styles.button}>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.buttonClick} onPress={onPress}>
                        <Text style={styles.colorButton}>Get Started 1</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
      );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    stretch: {
        width: '100%',
        height: 400,
        borderBottomLeftRadius: 100
    },

    active: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    findHome: {
        flex: 1,
        height: 20,
        flexDirection: 'column',
        alignContent:'flex-start',
        justifyContent: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 20
    },

    activeHover: {
        width: 30,
        height: 3,
        backgroundColor: '#c8c8c8',
        paddingHorizontal: 3,
        marginHorizontal: 5
    },

    activeHoverSelect: {
        width: 30,
        height: 3,
        backgroundColor: 'grey',
        paddingHorizontal: 3,
        marginHorizontal: 5
    },

    colorText: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'left'
    },

    colorText1: {
        color: 'grey',
        fontSize: 18,
        textAlign:'left'
    },

    colorButton: {
        color: 'white',
        fontSize: 25,
        textAlign:'center'
    },

    button: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        marginVertical: 25
    },

    buttonClick: {
        color: 'while',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 25
    },

    btn: {
        height: 60,
        marginHorizontal: 20,
    }
});