import React from 'react';

import Popover from 'react-native-popover-view';

import styled from 'styled-components';

import CardSilder from '../components/cards/CardSlider';
import MangaCard from '../components/cards/MangaCard';

import RowWrapper from '../components/layout/RowWrapper';
import Wrapper from '../components/layout/Wrapper';

export default function HomeScreen() {
  return (
    <Wrapper>
      <TopMangas>
        <CardSilder>
          <MangaCard
            mangaTitle={'Kimetsu No Yaiba'}
            mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
            readers={'1,926'}
          />
          <MangaCard
            mangaTitle={'Sword Art Online'}
            mangaImage={require('../assets/images/mangas/cover/sao.jpg')}
            readers={'1,101'}
          />
          <MangaCard
            mangaTitle={'Akame ga Kill!'}
            mangaImage={require('../assets/images/mangas/cover/akame.jpg')}
            readers={'1,001'}
          />
          <MangaCard
            mangaTitle={'The Gamer'}
            mangaImage={require('../assets/images/mangas/cover/thegamer.jpg')}
            readers={'801'}
          />
        </CardSilder>
      </TopMangas>

      <Popover
        isVisible={true}>
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/asterix.jpg')}
          readers={'801'}
        />
      </Popover>

      <RowWrapper>
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/asterix.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/chivalry.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/iiw.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/bokunohero.jpg')}
          teaser
        />
      </RowWrapper>

      <RowWrapper>
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/guiltyv1.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/fatestay.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/guiltyv2.jpg')}
          teaser
        />
      </RowWrapper>

      <RowWrapper>
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/tokyo.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/sao.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/akame.jpg')}
          teaser
        />
        <MangaCard
          mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
          teaser
        />
      </RowWrapper>
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