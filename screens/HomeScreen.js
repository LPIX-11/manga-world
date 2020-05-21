import React, { useState } from 'react';

import { Content } from 'native-base';
import { Dimensions } from 'react-native';
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';

// Custom Components
import Announce from '../components/layout/Announce';
import CardSilder from '../components/cards/CardSlider';
import CustomText from '../components/texts/CustomText';
import CustomButton from '../components/buttons/CustomButton';
import MangaCard from '../components/cards/MangaCard';
import RowWrapper from '../components/layout/RowWrapper';
import Wrapper from '../components/layout/Wrapper';

import styled from 'styled-components';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function HomeScreen() {

  const [showDetails, setShowDetails] = useState(false);
  const [mangaDetails, setMangaDetails] = useState({
    category: '',
    cover: '',
    chapters: '',
    title: '',
    description: '',
    fullTitle: '',
    readers: '',
    release_year: ''
  });

  const _displayDetails = () => {
    setMangaDetails({
      category: '‎Adventure‎, ‎dark fantasy‎, ‎martial arts',
      cover: require('../assets/images/mangas/cover/kimetsu.jpg'),
      chapters: '26',
      title: 'Kimetsu No Yaiba',
      description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotōge. The story follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon (鬼 Oni).',
      fullTitle: 'Demon Slayer (Kimetsu No Yaiba)',
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
          swipeDirection={['up', 'down']}
          swipeThreshold={200}
          width={screenWidth}
          onSwipeRelease={() => { setShowDetails(false) }}
          style={{ flex: 1, justifyContent: 'flex-end' }}
          modalAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })}
        >
          <ModalContent style={{ backgroundColor: '#000', height: screenHeight / 1.3 }}>
            <DetailsContainer>
              <MangaCard
                mangaTitle={mangaDetails.title}
                mangaImage={mangaDetails.cover}
                readers={mangaDetails.readers}
                onPress={() => { _displayDetails() }}
              />
              <MangaOverview>
                <CustomText
                  paddingTop={1}
                  size={18}
                  text={mangaDetails.fullTitle}
                  bold
                />

                <CustomText
                  paddingTop={12}
                  size={18}
                  text={mangaDetails.release_year}
                  bold
                />

                <CustomText
                  paddingTop={12}
                  size={10}
                  text={mangaDetails.category}
                />

                <CustomText
                  paddingTop={12}
                  size={15}
                  text={`${mangaDetails.chapters} chapters`}
                />
                <MangaOverviewActions>
                  <CustomButton
                    background={'#139BFB'}
                    buttonWidth={126}
                    positionItems={'center'}
                    radius={5}
                    spaceTop={5}
                    spaceBottom={5}
                    spaceLeft={5}
                    textSize={17}
                    textSize={18}
                    message={'Read'}
                  />
                </MangaOverviewActions>
              </MangaOverview>
            </DetailsContainer>

            <CustomText
              alignText={'justify'}
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

const DetailsContainer = styled.View`
  flex-direction: row;
`;

const MangaOverview = styled.View`
  flex-wrap: wrap;
  width: 50%;
`;

const MangaOverviewActions = styled.View`
  justify-content: space-between;
  padding-top: 12px;
`;

HomeScreen.navigationOptions = {
  header: null,
};