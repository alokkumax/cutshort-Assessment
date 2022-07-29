import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* appBar */}
      <View style={styles.appBar}>
        <View style={styles.appBar1}>
          <TouchableOpacity style={styles.moreIcon}>
            <Image
              style={styles.menu}
              source={require('../assets/images/more.png')}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>Hello Sandra,</Text>
        </View>
        <TouchableOpacity style={styles.appBar2}>
          <Text style={styles.button}>Add money</Text>
        </TouchableOpacity>
      </View>
      {/* content */}
      <View style={styles.content}>
        <Text
          style={{color: 'white', fontSize: 14, fontFamily: 'Poppins-Regular'}}>
          Your current balance is
        </Text>
        <Text
          style={{color: 'white', fontSize: 40, fontFamily: 'Poppins-Regular'}}>
          ₦ 200,000
        </Text>
      </View>
      <View style={styles.moneyOpt}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RequestMoneyScreen')}
          style={styles.btn}>
          <Text style={styles.btnText}>Request money</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={styles.btn}>
          <Text style={styles.btnText}>Send money</Text>
        </TouchableOpacity>
      </View>

      {/* Slider */}
      <View style={styles.slider}>
        <View style={styles.ui}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            marginTop: 15,
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
            }}>
            All Transactions
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#4E589F',
                fontSize: 14,
                marginHorizontal: 5,
                fontFamily: 'Poppins-Regular',
              }}>
              Sort by:
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              Recent
            </Text>
            <Image
              source={require('../assets/images/back.png')}
              style={{
                width: 12,
                height: 12,
                transform: [{rotate: '-90deg'}],
                marginLeft: 8,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>
        {/* DynamicUserLists */}
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          {user.map((ListUser, index) => {
            return (
              <View
                key={ListUser.id}
                style={ListUser.id % 2 == 0 ? styles.tile2 : styles.tile1}>
                <Image source={ListUser.img} style={styles.tilesPerson} />
                <View style={styles.tilesInfo}>
                  <Text style={styles.tileName}>{ListUser.name}</Text>
                  <View
                    style={
                      ListUser.status == 'Recieved'
                        ? styles.tileStatusGreen
                        : ListUser.status == 'Failed'
                        ? styles.tileStatusRed
                        : styles.tileStatusOr
                    }>
                    <Image
                      source={ListUser.statusStyle}
                      style={styles.statusImg}
                    />
                    <Text style={styles.statusText}>{ListUser.status}</Text>
                  </View>
                </View>
                <Text
                  style={
                    ListUser.status == 'Recieved'
                      ? styles.tileAmountGreen
                      : ListUser.status == 'Failed'
                      ? styles.tileAmountRed
                      : styles.tileAmountOr
                  }>
                  {ListUser.amount}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
//STYLE
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010A43',
    flex: 1,
    flexDirection: 'column',
  },
  appBar: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  appBar1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    width: 40,
    height: 40,
    borderRadius: 360,
    backgroundColor: '#2D116B',
    padding: 8,
  },
  menu: {
    resizeMode: 'contain',
    height: '90%',
    width: '90%',
  },
  welcome: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  appBar2: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#212A6B',
  },
  button: {
    color: '#426DDC',
    backgroundColor: '#212A6B',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  moneyOpt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 15,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#464E8A',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  btnText: {
    color: '#464E8A',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  slider: {
    flex: 1,
    flexDirection: 'column',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#10194E',
  },
  ui: {
    marginTop: 10,
    width: 80,
    height: 7,
    backgroundColor: '#4E589F',
    borderRadius: 8,
    alignSelf: 'center',
  },
  tileLight: {
    backgroundColor: '#192259',
  },
  tileDark: {
    backgroundColor: '#10194E',
  },
  tile1: {
    backgroundColor: '#192259',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tile2: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tilesPerson: {
    height: 48,
    width: 48,
  },
  tileName: {
    fontSize: 16,
    color: '#858EC5',
    fontFamily: 'Poppins-Regular',
  },
  tilesInfo: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  statusImg: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
    marginRight: 5,
  },
  statusText: {
    fontFamily: 'Inter-Regular',
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  tileStatusGreen: {
    flexDirection: 'row',
    paddingVertical: 3,
    borderRadius: 20,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
    width: 90,
    backgroundColor: '#1DC7AC',
  },
  tileStatusRed: {
    flexDirection: 'row',
    paddingVertical: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
    width: 70,
    backgroundColor: '#FE4A54',
  },
  tileStatusOr: {
    flexDirection: 'row',
    paddingVertical: 3,
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 5,
    width: 60,
    backgroundColor: '#FAAD39',
  },
  tileAmountGreen: {
    fontSize: 16,
    color: '#1DC7AC',
    fontFamily: 'Poppins-Medium',
  },
  tileAmountRed: {
    fontSize: 16,
    color: '#FE4A54',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  tileAmountOr: {
    fontSize: 16,
    color: '#FAAD39',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
});
//DATA
const user = [
  {
    id: 1,
    img: require('../assets/images/1.png'),
    name: 'Adeboye Usman',
    status: 'Recieved',
    amount: '₦ 200,000',
    statusStyle: require('../assets/images/green.png'),
  },
  {
    id: 2,
    img: require('../assets/images/2.png'),
    name: 'Mercy Popoola',
    status: 'Failed',
    amount: '₦ 110,000',
    statusStyle: require('../assets/images/red.png'),
  },
  {
    id: 3,
    img: require('../assets/images/3.png'),
    name: 'Onome Adetayo',
    status: 'Sent',
    amount: '₦ 10,000',
    statusStyle: require('../assets/images/or.png'),
  },
  {
    id: 4,
    img: require('../assets/images/4.png'),
    name: 'Kingsley Abiodun',
    status: 'Recieved',
    amount: '₦ 20,000',
    statusStyle: require('../assets/images/green.png'),
  },
  {
    id: 5,
    img: require('../assets/images/5.png'),
    name: 'Priya Jonas',
    status: 'Sent',
    amount: '₦ 30,000',
    statusStyle: require('../assets/images/or.png'),
  },
  {
    id: 6,
    img: require('../assets/images/6.png'),
    name: 'Somendu Guloi',
    status: 'Failed',
    amount: '₦ 11,000',
    statusStyle: require('../assets/images/red.png'),
  },
  {
    id: 7,
    img: require('../assets/images/7.png'),
    name: 'Nivedita Jonas',
    status: 'Recieved',
    amount: '₦ 80,000',
    statusStyle: require('../assets/images/green.png'),
  },
];

export default HomeScreen;
