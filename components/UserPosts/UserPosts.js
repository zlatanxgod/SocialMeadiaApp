import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
const UserPost = props => {
  return (
    <View
      style={{
        marginHorizontal: 28,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        marginBottom: 20,
      }}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <UserProfileImage />
          <View style={style.userPostInfo}>
            <Text style={style.name}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsis} />
        </Pressable>
      </View>
      <View>
        <View style={style.imageCentre}>
          <Image source={require('../../assets/images/default_post.png')} />
        </View>

        <View style={style.userPostStats}>
          <Pressable style={style.userPostButton}>
            <FontAwesomeIcon icon={faHeart} style={style.userPostStatIcon} />
            <Text>{props.likes}</Text>
          </Pressable>
          <Pressable style={style.userPostButton}>
            <FontAwesomeIcon icon={faComment} style={style.userPostStatIcon} />
            <Text>{props.comments}</Text>
          </Pressable>
          <Pressable style={style.userPostButton}>
            <FontAwesomeIcon icon={faBookmark} style={style.userPostStatIcon} />
            <Text>{props.bookmarks}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
    location: PropTypes.string,
  };
};

export default UserPost;
