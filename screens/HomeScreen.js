import React, { useState } from 'react';

import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';

import styled from 'styled-components';

import CardSilder from '../components/cards/CardSlider';
import MangaCard from '../components/cards/MangaCard';

import RowWrapper from '../components/layout/RowWrapper';
import Wrapper from '../components/layout/Wrapper';
import { Content, View } from 'native-base';
import { Dimensions } from 'react-native';
import CustomText from '../components/texts/CustomText';
import Announce from '../components/layout/Announce';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function HomeScreen() {

  const [showDetails, setShowDetails] = useState(false);
  const [mangaDetails, setMangaDetails] = useState({
    cover: '',
    title: '',
    description: '',
    readers: '',
    release_year: ''
  });

  const _displayDetails = () => {
    setMangaDetails({
      cover: require('../assets/images/mangas/cover/kimetsu.jpg'),
      title: 'Kimetsu No Yaiba',
      description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotōge. The story follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon (鬼 Oni).',
      readers: '1,926',
      release_year: '2019'
    });
    setShowDetails(true);
  };

  return (
    <Wrapper>
      <TopMangas>
        <CardSilder>
          <MangaCard
            mangaTitle={'Kimetsu No Yaiba'}
            mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
            readers={'1,926'}
            onPress={() => { _displayDetails() }}
          />
          <MangaCard
            mangaTitle={'Sword Art Online'}
            mangaImage={require('../assets/images/mangas/cover/sao.jpg')}
            readers={'1,101'}
            onPress={() => { _displayDetails() }}
          />
          <MangaCard
            mangaTitle={'Akame ga Kill!'}
            mangaImage={require('../assets/images/mangas/cover/akame.jpg')}
            readers={'1,001'}
            onPress={() => { _displayDetails() }}
          />
          <MangaCard
            mangaTitle={'The Gamer'}
            mangaImage={require('../assets/images/mangas/cover/thegamer.jpg')}
            readers={'801'}
            onPress={() => { _displayDetails() }}
          />
        </CardSilder>
      </TopMangas>

      <RowWrapper title='Continue Reading…'>
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/asterix.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/chivalry.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/iiw.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/bokunohero.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
      </RowWrapper>

      <RowWrapper title='Recommended For You'>
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/guiltyv1.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/fatestay.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/guiltyv2.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
      </RowWrapper>

      <RowWrapper title='Exiting New Manga'>
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/tokyo.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/sao.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/akame.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
          teaser
          onPress={() => { _displayDetails() }}
        />
      </RowWrapper>

      <Content>
        <Modal
          visible={showDetails}
          swipeDirection={['up', 'down']} // can be string or an array
          swipeThreshold={200} // default 100
          width={screenWidth}
          height={screenHeight / 1.2}
          onSwipeRelease={() => { setShowDetails(false) }}
          style={{ flex: 1, justifyContent: 'flex-end' }}
          modalAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })}
        >
          <ModalContent>
            <View style={{ flexDirection: 'row' }}>
              <MangaCard
                mangaTitle={mangaDetails.title}
                mangaImage={mangaDetails.cover}
                readers={mangaDetails.readers}
                onPress={() => { _displayDetails() }}
              />
              <View style={{ flexWrap: 'wrap', width: '50%' }}>
                <CustomText
                  alignment={'center'}
                  paddingTop={1}
                  size={18}
                  text={'Demon Slayer (Kimetsu No Yaiba)'}
                  textWeight={'700'}
                />
              </View>
            </View>

            <CustomText
              content={'justify'}
              lineHeight={20}
              paddingTop={12}
              text={mangaDetails.description}
            />
          </ModalContent>
        </Modal>
      </Content>

      <Announce title={'Slam Dunk'}>
        <MangaCard
          mangaTitle={'Slam Dunk'}
          mangaImage={require('../assets/images/mangas/cover/slam.jpg')}
          readers={'2,937'}
          teaserText={`Hanamichi Sakuragi is a bad guy and a gang leader. He resolves everything with his fists and is unpopular with women.
One day he meets Haruko Akagi, a beautiful young girl. She asks him if he plays basketball since he’s extremely tall. Trying to impress Haruko, he pretends to be a basketball genius. He tries to perform the coolest move in basketball: the slam dunk. He fails miserably.
After a string of wild events, Hanamichi decides to join his school’s ailing basketball team. He works hard at developing his skills. He tries to learn to play basketball and become the great player Haruko would love.`}
          banner
        />
      </Announce>
    </Wrapper>
  );
}


const TopMangas = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

HomeScreen.navigationOptions = {
  header: null,
};