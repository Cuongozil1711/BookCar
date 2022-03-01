import * as React from 'react';
import { View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../components/context';
export default function Logout() {
    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => signOut()}>
          <Image
            style={styles.stretch}
            source={require('../../src/assets/user.jpg')}
            />
            </TouchableOpacity>
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
  }
});