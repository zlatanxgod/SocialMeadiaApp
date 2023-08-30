import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Title from '../../components/Title';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';
import UserStory from '../../components/userStory/UserStory';
import UserPost from '../../components/UserPosts/UserPosts';
import {NavigationContainer} from '@react-navigation/native';
import globalStyle from '../../assets/styles/main';
import {Routes} from '../../Navigation/Routes';
const Home = ({navigation}) => {
  const data = [
    {firstName: 'Abhishant', id: 1},
    {firstName: 'Angel', id: 2},
    {firstName: 'Joseph', id: 3},
    {firstName: 'Harsh', id: 4},
    {firstName: 'Bhaskar', id: 5},
    {firstName: 'Abhi', id: 6},
    {firstName: 'Abhi', id: 7},
    {firstName: 'Abhi', id: 8},
    {firstName: 'Abhishek', id: 9},
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 570,
      comments: 12,
      bookmarks: 60,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, New York',
      likes: 300,
      comments: 18,
      bookmarks: 17,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 1240,
      comments: 56,
      bookmarks: 20,
      id: 5,
    },
  ];
  const pageSize = 4;
  const PageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, PageSizePosts),
  );
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  });
  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;

    if (posts) {
      setPostPageNumber(pageNumber);
    } else setPageNumber(pageNumber);

    if (startIndex > data.length) return [];
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={"Let's Explore"} />
              <Pressable style={style.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#fcfcfc'}
                  size={15}
                />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={renderedData}
                renderItem={({item}) => {
                  return <UserStory firstName={item.firstName} />;
                }}></FlatList>
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, PageSizePosts, true),
            ]);

            setIsLoadingPosts(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <UserPost
            firstName={item.firstName}
            lastName={item.lastName}
            comments={item.comments}
            likes={item.likes}
            bookmarks={item.bookmarks}
            location={item.location}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
