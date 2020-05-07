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
    console.log(showDetails)
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

      <RowWrapper title='Continue Reading'>
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
          style={{ position: 'absolute', bottom: 0 }}
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