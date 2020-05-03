import React from 'react';

import styled from 'styled-components';

import CardSilder from '../components/cards/CardSlider';
import MangaCard from '../components/cards/MangaCard';

import TopMangaCard from '../components/cards/TopMangaCard';
import RowWrapper from '../components/layout/RowWrapper';
import Wrapper from '../components/layout/Wrapper';

export default function HomeScreen() {
  return (
    <Wrapper>
      <TopMangas>
        <CardSilder>
          <TopMangaCard
            mangaTitle={'Kimetsu No Yaiba'}
            mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
            readers={'1,926'}
          />
          <TopMangaCard
            mangaTitle={'Sword Art Online'}
            mangaImage={require('../assets/images/mangas/cover/sao.jpg')}
            readers={'1,101'}
          />
          <TopMangaCard
            mangaTitle={'Akame ga Kill!'}
            mangaImage={require('../assets/images/mangas/cover/akame.jpg')}
            readers={'1,001'}
          />
          <TopMangaCard
            mangaTitle={'The Gamer'}
            mangaImage={require('../assets/images/mangas/cover/thegamer.jpg')}
            readers={'801'}
          />
        </CardSilder>
      </TopMangas>

      <RowWrapper>
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/asterix.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/chivalry.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/iiw.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/bokunohero.jpg')}
          readers={'801'}
        />
      </RowWrapper>

      <RowWrapper>
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'Guilty Crown V1'}
          mangaImage={require('../assets/images/mangas/cover/guiltyv1.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'Fate Stay Night Unlimited BladeWorks'}
          mangaImage={require('../assets/images/mangas/cover/fatestay.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'Guilty Crown V2'}
          mangaImage={require('../assets/images/mangas/cover/guiltyv2.jpg')}
          readers={'801'}
        />
      </RowWrapper>

      <RowWrapper>
        <MangaCard
          mangaTitle={'Sirius The Jaeger'}
          mangaImage={require('../assets/images/mangas/cover/tokyo.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/sao.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/akame.jpg')}
          readers={'801'}
        />
        <MangaCard
          mangaTitle={'The Gamer'}
          mangaImage={require('../assets/images/mangas/cover/kimetsu.jpg')}
          readers={'801'}
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