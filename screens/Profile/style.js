import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageContent: {
    borderWidth: 1,
    padding: 2,
    borderColor: 'purple',
    borderRadius: 125,
    marginTop: 40,
  },
  profileImage: {
    height: 125,
    width: 125,
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  userName: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
  profileStats: {
    marginHorizontal: 10,
    flex: 1,
    marginTop: 32,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    //borderWidth: 1,
  },
  statBoxBorder: {
    borderRightWidth: 1,
    borderColor: '#dad7e0',
  },
  statTextValue: {
    fontWeight: '700',
    fontSize: 22,
    color: '#3a2769',
  },
  statTextDesc: {
    fontSize: 16,
  },
  dashLine: {
    borderTopWidth: 1,
    marginHorizontal: 20,
    borderColor: '#e6e4eb',
    marginTop: 20,
  },
});

export default style;
