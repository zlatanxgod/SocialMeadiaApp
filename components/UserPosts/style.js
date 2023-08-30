import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: 'black',
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInfo: {
    marginLeft: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: '#ad1895',
    borderRadius: 50,
    padding: 3,
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageCentre: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  userPostButton: {
    flexDirection: 'row',
    marginRight: 27,
  },
  userPostStatIcon: {marginRight: 3},
});

export default style;
