import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RequesMoneyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* appBar */}
        <ImageBackground style={{}} source={require('../assets/images/bg.png')}>
          <View style={styles.appBar}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}>
              <Image source={require('../assets/images/back.png')} />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.heading}>New Request</Text>
          </View>

          <View style={styles.content}>
            {/* <Image/> */}
            <View style={styles.effect2}>
              <View style={styles.effect1}>
                <Image
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: 360,
                    borderColor: 'red',
                  }}
                  source={require('../assets/images/person.jpg')}
                />
              </View>
            </View>
            <Text style={styles.name}>Monica Ramon</Text>
            <Text style={styles.text}>is requesting for:</Text>
            <Text style={styles.money}>₦ 200,000</Text>
          </View>
        </ImageBackground>

        {/* btnView */}
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.btnText}>Send money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btnText2}>Don't send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
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
  back: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  backText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
  },
  heading: {
    flex: 2,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    justifyContent: 'center',
    fontFamily: 'Poppins-Medium',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 35,
  },
  effect2: {
    marginTop: 10,
    borderRadius: 120,
    backgroundColor: '#10194E',
    padding: 22,
  },
  effect1: {
    borderRadius: 120,
    backgroundColor: '#172957',
    padding: 22,
  },
  name: {
    marginTop: 35,
    fontSize: 24,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  text: {
    marginVertical: 10,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  money: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
  },
  btnView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn1: {
    height: 60,
    backgroundColor: '#FF2E63',
    paddingVertical: 18,
    width: 160,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 18,
  },
  btn2: {
    height: 60,
    width: 160,
    borderColor: '#464E8A',
    borderWidth: 1,
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 16,
  },
  btnText2: {
    color: '#464E8A',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default RequesMoneyScreen;
