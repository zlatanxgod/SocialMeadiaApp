import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import globalStyle from '../../assets/styles/main';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileTabNavigation} from '../../Navigation/MainNavigation';
const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView style={{flexGrow: 1}}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>ABCD</Text>
        </View>
        <View style={style.profileStats}>
          <View style={[style.statBox, style.statBoxBorder]}>
            <Text style={style.statTextValue}>45</Text>
            <Text style={style.statTextDesc}>Following</Text>
          </View>
          <View style={[style.statBox, style.statBoxBorder]}>
            <Text style={style.statTextValue}>30M</Text>
            <Text style={style.statTextDesc}>Followers</Text>
          </View>
          <View style={style.statBox}>
            <Text style={style.statTextValue}>100</Text>
            <Text style={style.statTextDesc}>Posts</Text>
          </View>
        </View>
        <View style={style.dashLine}></View>
        <View style={{flex: 1}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
