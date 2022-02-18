import * as React from 'react';
import { Alert, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import users from '../../model/users';
import { AuthContext } from '../../components/context';
const LoginScreen = () => {

    const [data, setData] = React.useState(
        {
            username : '',
            password : '',
            secureTextEntry : true,
            isValidUser: true,
            isValidPassword: true,
        }
    )

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const textInputChange = (key,val) => {
        setData({
            ...data,
            [key]: val
        })
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const { signIn } = React.useContext(AuthContext);


    const loginHandle = (userName, password) => {

        const foundUser = users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if (foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome NSMP!</Text>
                </View>

                <View  animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: '#FFF',
                }]}>
                    <Text style={[styles.text_footer, {color: '#333'}]}>Username</Text>

                    <View style={styles.action}>
                        <Icon
                            name={'user'}
                            color={'#05375a'}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Username"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: '#05375a'
                            }]}
                            editable
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange("username",val)}
                            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                    </View>

                    { data.isValidUser ? null :
                    <View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    </View>
                    }

                    <Text style={[styles.text_footer, {color: '#333',marginTop: 35}]}>Password</Text>

                    <View style={styles.action}>
                        <Icon
                            name="lock"
                            color={'#05375a'}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput, {color: '#05375a'}]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />

                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>

                    { data.isValidPassword ? null : 
                        <View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                        </View>
                    }

                    <TouchableOpacity>
                        <Text style={{color: '#009387', marginTop:15, textAlign: 'right'}}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <TouchableOpacity style={{width: '100%', height: 50, backgroundColor: '#08d4c4', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}} onPress={() => loginHandle(data?.username, data?.password)}>
                            <Text style={styles.signIn}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}} style={{marginTop: 15, width: '100%', height: 50,borderColor: '#009387',borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={[styles.signIn, {color: '#009387'}]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottom}>
                        <Text style={styles.text_footer1}>@2022_By_Cuongnv</Text>
                    </View>
                </View>
        </View>
    )
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    bottom: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_footer1: {
        color: '#333',
        fontSize: 13,
        textAlign: 'center',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        borderRadius: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
