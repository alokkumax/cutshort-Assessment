import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container1}>
      <SafeAreaView>
        <ImageBackground
          style={styles.imgB}
          source={require('../assets/images/splashIcon.png')}>
          <View style={styles.bottomView}>
            <View style={styles.bar}>
              <View style={styles.bar1} />
              <View style={styles.bar2} />
              <View style={styles.bar1} />
            </View>
            <Text style={styles.text1}>Transfer That Is Safe</Text>
            <Text style={styles.text2}>
              You have nothing to be scared{'\n'}about, we got you covered.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              style={styles.buttonStart}>
              <Text style={styles.buttonText}>Start banking</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#010A43',
  },
  imgB: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  bottomView: {
    flexDirection: 'column',
    width: '80%',
    backgroundColor: '#17288E',
    borderTopRightRadius: 70,
    paddingHorizontal: 35,
    paddingVertical: 25,
    position: 'absolute',
    bottom: 0,
  },
  bar: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  bar1: {
    width: 12,
    height: 6,
    backgroundColor: '#fdd590',
    borderRadius: 4,
  },
  bar2: {
    width: 28,
    height: 6,
    backgroundColor: '#ffb129',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  text1: {
    fontSize: 19,
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  buttonStart: {
    width: 140,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#1E2989',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
