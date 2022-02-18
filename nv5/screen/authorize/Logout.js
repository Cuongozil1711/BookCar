import * as React from 'react';
import { View, Button } from 'react-native';
import { AuthContext } from '../../components/context';
export default function Logout({props}) {

    console.log("props: " + JSON.stringify(props));
    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
          <Button
            title="Logout"
            onPress={() => signOut()}
            color="#333"
          />
        </View>
      );
}