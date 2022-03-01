import { height } from '@mui/system';
import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, paddingHorizontal: 10, elevation: 15 }}>
           <ImageBackground source={require('../../src/assets/hotel7.jpg')} resizeMode="cover" style={styles.image}>

             <TouchableOpacity style={styles.backHome} onPress={() => navigation.navigate("Home")}>
                          <Icon
                            name="angle-left"
                            color={'#05375a'}
                            size={35}
                        />
             </TouchableOpacity>
           </ImageBackground>
        </View>
      );
}

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 380,
    borderRadius: 10,
    marginVertical: 10
  },

  backHome: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
