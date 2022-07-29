import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* //APP BAR */}
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.backIcon}
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchText}
            numberOfLines={1}
            placeholder="Search contacts"
            placeholderTextColor={'gray'}
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.effect}>
          <View style={styles.effect1}>
            <View style={[styles.effect1]}></View>
          </View>
        </View>
      </View>
      {/* //PROFILES */}
      <View style={styles.profileArea}>
        <View
          style={[styles.profile, {position: 'absolute', left: 140, top: 20}]}>
          <View style={styles.profileUnselect}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/2.png')}
            />
          </View>
          <Text style={styles.profileText}>Adedoyin Leke</Text>
        </View>

        <View
          style={[styles.profile, {position: 'absolute', top: 80, left: 20}]}>
          <View style={styles.profileUnselect}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/3.png')}
            />
          </View>
          <Text style={styles.profileText}>Adelaide Uti {'(son)'}</Text>
        </View>

        <View
          style={[styles.profile, {position: 'absolute', left: 45, top: 190}]}>
          <View style={styles.profileUnselect}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/1.png')}
            />
          </View>
          <Text style={styles.profileText}>Adolph Colleague</Text>
        </View>

        <TouchableOpacity
          style={[styles.profile, {position: 'absolute', right: 50, top: 120}]}>
          <View style={styles.profileSelect}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/4.png')}
            />
          </View>
          <Text style={styles.profileText}>Adeleke Adeyanju</Text>
        </TouchableOpacity>

        <View
          style={[
            styles.profile,
            {position: 'absolute', right: 140, bottom: -340},
          ]}>
          <View style={styles.profileUnselect}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/5.png')}
            />
          </View>
          <Text style={styles.profileText}>Aduni Wale</Text>
        </View>

        <View
          style={[styles.profile, {position: 'absolute', right: 15, top: 250}]}>
          <View style={styles.profileUnselect}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/6.png')}
            />
          </View>
          <Text style={styles.profileText}>Adedoyin Leke</Text>
        </View>
      </View>

      {/* CONTINUE - SECTION*/}
      <View style={styles.slider}>
        <View style={styles.ui} />
        <Image
          style={styles.image}
          source={require('../assets/images/4.png')}
        />
        <Text style={styles.bottomText1}>Adeleke Adeyanju</Text>
        <Text style={styles.bottomText2}>
          {'(+'}234{')'} 905 1694 275
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010A43',
    flex: 1,
    flexDirection: 'column',
  },

  searchText: {
    color: 'white',
    paddingLeft: 10,
    width: '80%',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  back: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 18,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'center',
  },
  backText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginStart: 3,
    fontFamily: 'Poppins-Regular',
  },
  profileArea: {
    position: 'absolute',
    marginTop: 100,
    marginHorizontal: 25,
    left: 0,
    right: 0,
  },
  content: {
    justifyContent: 'center',
  },
  slider: {
    flex: 1,
    flexDirection: 'column',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#10194E',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ui: {
    marginTop: 10,
    width: 80,
    height: 7,
    backgroundColor: '#4E589F',
    borderRadius: 8,
    alignSelf: 'center',
  },
  bottomText1: {
    color: 'white',
    fontSize: 20,
    marginBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  bottomText2: {
    color: 'white',
    fontSize: 14,
    marginBottom: 18,
    fontFamily: 'Poppins-Regular',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  effect: {
    padding: 50,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#0D164B',
    width: '100%',
    height: windowWidth,
  },
  effect1: {
    padding: 50,
    width: '100%',
    height: '100%',
    borderRadius: 360,
    borderWidth: 0.8,
    borderColor: '#0D164B',
  },
  profileUnselect: {
    backgroundColor: 'white',
    padding: 1,
    width: 36,
    height: 36,
    borderRadius: 360,
    marginBottom: 5,
  },
  profileSelect: {
    backgroundColor: 'white',
    width: 75,
    height: 75,
    backgroundColor: '#1DC76B',
    padding: 3,
    borderRadius: 360,
    marginBottom: 5,
  },
  profilePic: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: 360,
  },
  profileText: {
    color: 'white',
    fontSize: 10,
  },
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    width: 150,
    marginBottom: 20,
    paddingVertical: 15,
    backgroundColor: '#FF2E63',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    borderRadius: 360,
    marginTop: 20,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1DC76B',
    backgroundColor: '#1B2B52',
    alignItems: 'center',
    marginRight: 5,
  },
  appBar: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topText: {
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
  },
});
