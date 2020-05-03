import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import { Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right } from 'native-base';
import { Image } from 'react-native';
import styled from 'styled-components';
import CardSilder from '../components/cards/CardSlider';

export default function HomeScreen() {
  return (
    <Wrapper>
      <TopMangas>
        <CardSilder>
          <Card style={{ width: 157 }}>
            <CardItem cardBody>
              <Image source={require('../assets/images/mangas/cover/kimetsu.jpg')} style={{ height: 100, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Kimetsu No Yaiba
              </Text>
              </Left>
              <Right>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ width: 157 }}>
            <CardItem cardBody>
              <Image source={require('../assets/images/mangas/cover/kimetsu.jpg')} style={{ height: 100, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Kimetsu No Yaiba
              </Text>
              </Left>
              <Right>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ width: 157 }}>
            <CardItem cardBody>
              <Image source={require('../assets/images/mangas/cover/kimetsu.jpg')} style={{ height: 100, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Kimetsu No Yaiba
              </Text>
              </Left>
              <Right>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ width: 157 }}>
            <CardItem cardBody>
              <Image source={require('../assets/images/mangas/cover/kimetsu.jpg')} style={{ height: 100, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Kimetsu No Yaiba
              </Text>
              </Left>
              <Right>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </CardSilder>
      </TopMangas>
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