import { isTaggedTemplateExpression } from '@babel/types';
import { red } from '@mui/material/colors';
import { height, hexToRgb, style } from '@mui/system';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Button, StatusBar, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Dimensions, Pressable, SafeAreaView, SectionList, FlatList } from 'react-native';
const { width } = Dimensions.get('screen');
export default function HomeScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.detail} onPress={() => navigation.navigate("Details")}>
      <Image
        style={styles.stretch}
        source={item.image}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ ...styles.textItem, color: 'black' }}>{item.nameHotel}</Text>
        <Text style={{ ...styles.textItem, color: 'rgb(70, 130, 180)' }}>${item.price}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ ...styles.textItem, color: '#c3c3c3' }}>{item.addrees}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={{ ...styles.textItem, color: '#c3c3c3' }}>
          <Icon name={'bed'} color={'#333'} size={20} /> 2   <Icon name={'phone'} color={'#333'} size={20} /> {item.phone}</Text>
      </View>
    </TouchableOpacity>
  );
  const ListProduct = () => {

    const [isActive, setIsActive] = React.useState("Recommended");

    const listCategory = ["Popuplar", "Recommended", "Nearest"];

    const itemPressClick = (item) => {
      console.log("item: " + item);
      setIsActive(item);

      if (item == "Popuplar") {
        setListDatView(dataPopular);
      }
      else if (item == "Recommended") {
        setListDatView(dataRecommended);
      }
      else {
        setListDatView(dataNearest)
      }
    }


    const dataPopular = [
      {
        image: require('../../src/assets/hotel3.jpg'),
        nameHotel: 'Central Edmon',
        price: '15,50,000',
        addrees: '118 Street, West Edmonton, Alberta',
        phone: '0528129662',
      },

      {
        image: require('../../src/assets/hotel1.jpg'),
        nameHotel: 'Central Edmon',
        addrees: '118 Street, West Edmonton, Alberta',
        price: '16,00,000',
        phone: '0528129662',
      }
    ]

    const dataRecommended = [
      {
        image: require('../../src/assets/hotel2.jpg'),
        nameHotel: 'Central Edmon',
        price: '13,50,000',
        addrees: '118 Street, West Edmonton, Alberta',
        phone: '09261818101',
      },

      {
        image: require('../../src/assets/hotel4.jpg'),
        nameHotel: 'Central Edmon',
        addrees: '128 Street, Liver , Wetbons',
        price: '16,00,000',
        phone: '0589271801',
      }
    ]

    const dataNearest = [
      {
        image: require('../../src/assets/hotel7.jpg'),
        nameHotel: 'Central Edmon',
        price: '18,00,000',
        addrees: '118 Street, West Edmonton, Alberta',
        phone: '0528129662',
      },

      {
        image: require('../../src/assets/hotel8.jpg'),
        nameHotel: 'Central Edmon',
        addrees: '118 Street, West Edmonton, Alberta',
        price: '19,00,000',
        phone: '09151847191',
      }
    ]


    const [listDatView, setListDatView] = React.useState(dataPopular);
    return (
      <>
        <View style={styles.itemList}>
          {
            listCategory.map((item, index) =>
            (
              //<View style={styles.itemList1} key={index}>
              <TouchableOpacity key={index} style={styles.itemList1} onPress={() => itemPressClick(item)}>
                <Text style={[styles.textItem, isActive === item && { color: 'black', borderBottomWidth: 1, height: 30 }]} key={index}>{item}</Text>
              </TouchableOpacity>
              // </View>
            ))
          }
        </View>

        {/* {
          listDatView.map((item, index) => (
            <View style={styles.detail} key={index}>
                    <Image
                    style={styles.stretch}
                    source={item.image}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center', width:'100%',justifyContent: 'space-between', marginTop: 5}}>
                      <Text style={{...styles.textItem, color: 'black'}}>{item.nameHotel}</Text>
                      <Text style={{...styles.textItem, color: 'rgb(70, 130, 180)'}}>${item.price}</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center', width:'100%',justifyContent: 'space-between', marginTop: 5}}>
                      <Text style={{...styles.textItem, color: '#c3c3c3'}}>{item.addrees}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', width:'100%',justifyContent: 'space-between', marginTop: 5}}>
                      <Text style={{...styles.textItem, color: '#c3c3c3'}}>Call: {item.phone}</Text>
                    </View>
            </View>
          ))
        } */}

        <SafeAreaView style={styles.container}>
          <FlatList
            data={listDatView}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.nameHotel.toString() + index}
          />
        </SafeAreaView>
      </>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <View style={styles.searchleft}>
          <TextInput placeholder='Search address, cty, location...' style={styles.textInput} />
        </View>
        <View style={styles.searchright}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Icon
              name={'search'}
              color={'#fff'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageHome}>
            <View style={styles.imageleft}>
              <Image
                style={styles.stretch}
                source={require('../../src/assets/hotel6.jpg')}
              />
              <Text style={styles.textInput1}>Buy a Home</Text>
            </View>

            <View style={styles.imageRigth}>
              <Image
                style={styles.stretch}
                source={require('../../src/assets/hotel5.jpg')}
              />
              <Text style={styles.textInput1}>Rent a Home</Text>
            </View>
          </View>

          <ListProduct />

        </ScrollView>
      </SafeAreaView>

      <View style={styles.chat}>

        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }} onPress={() => navigation.navigate("Chat")}>
          <Icon
            name={'comment'}
            color={'#fff'}
            size={25}
            style={{ textAlign: 'center' }}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
}

export const styles = StyleSheet.create(
  {

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },

    search: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginHorizontal: 20
    },

    searchleft: {
      backgroundColor: '#c3c3c3',
      flex: 4,
      borderRadius: 10
    },

    imageleft: {
      backgroundColor: '#FFF',
      width: width / 2 - 30,
      borderRadius: 10,
      elevation: 15,
      marginRight: 10,
      paddingHorizontal: 10,
      paddingTop: 10
    },

    imageRigth: {
      backgroundColor: '#FFF',
      width: width / 2 - 30,
      borderRadius: 10,
      elevation: 15,
      marginLeft: 10,
      paddingHorizontal: 10,
      paddingTop: 10
    },


    searchright: {
      backgroundColor: '#08d4c4',
      flex: 1,
      borderRadius: 10,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    textInput: {
      color: '#c3c3c3',
      fontSize: 15,
      paddingHorizontal: 15,
    },

    imageHome: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      width: '100%',
      height: 220
    },

    scrollView: {
      // marginHorizontal: 10,
      marginVertical: 10,
      flexDirection: 'row',
    },

    stretch: {
      width: '100%',
      height: 150,
      borderRadius: 5,
    },

    textInput1: {
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
      color: 'black',
      fontSize: 16
    },

    itemList: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    itemList1: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 35,
    },

    textItem: {
      fontSize: 18,
      color: '#c3c3c3',
    },

    detail: {
      flexDirection: 'column',
      alignItems: 'center',
      elevation: 15,
      backgroundColor: 'white',
      height: 250,
      marginTop: 30,
      borderRadius: 10,
      paddingHorizontal: 10
    },

    chat: {
      width: 50,
      height: 50,
      backgroundColor: '#08d4c4',
      borderRadius: 50,
      position: 'absolute',
      zIndex: 9,
      bottom: 25,
      right: 15,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
);