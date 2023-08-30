import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 17,
    paddingRight: 26,
  },
  messageIcon: {
    padding: 8,
    backgroundColor: '#e6dcdc',
    borderRadius: 100,
  },
  messageNumberContainer: {
    height: 14,
    width: 14,
    backgroundColor: '#e352d6',
    borderRadius: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  messageNumber: {fontSize: 9, color: 'white'},
  userStoryContainer: {
    paddingHorizontal: 28,
    marginTop: 12,
    height: 100,
  },
  userPostContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
});

export default style;
