import React from 'react';
import { Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Card, CardItem, Left, Button, Right, Body, View } from 'native-base';

import CustomText from '../texts/CustomText';

const screenWidth = Dimensions.get('screen').width;

export default MangaCard = props => {
    if (props.teaser) {
        return (
            <TouchableWithoutFeedback  {...props}>
                <Card style={{ width: 130, marginEnd: 15 }}>
                    <CardItem cardBody>
                        <Image source={props.mangaImage} style={{ height: 200, flex: 1 }} />
                    </CardItem>
                </Card>
            </TouchableWithoutFeedback>
        )
    }

    if (props.banner) {
        return (
            <TouchableWithoutFeedback  {...props}>
                <Card style={{ width: screenWidth, marginEnd: 15 }} {...props}>
                    <CardItem cardBody>
                        <Image source={props.mangaImage} style={{ height: 200, flex: 1 }} />
                    </CardItem>
                    <CardItem style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Left>
                                <CustomText
                                    size={11}
                                    text={props.mangaTitle}
                                />
                            </Left>
                            <Right>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <CustomText
                                        text={`${props.readers} readers`}
                                        size={11}
                                    />
                                </Button>
                            </Right>
                        </View>
                        <Body>
                            <CustomText
                                content={'justify'}
                                lineHeight={20}
                                text={props.teaserText}
                            />
                        </Body>
                    </CardItem>
                </Card>
            </TouchableWithoutFeedback>

        )
    }

    return (
        <TouchableWithoutFeedback  {...props}>
            <Card style={{ width: 160, marginEnd: 15 }} {...props}>
                <CardItem cardBody>
                    <Image source={props.mangaImage} style={{ height: 200, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <CustomText
                            size={11}
                            text={props.mangaTitle}
                        />
                    </Left>
                    <Right>
                        <Button transparent textStyle={{ color: '#87838B' }}>
                            <CustomText
                                text={`${props.readers} readers`}
                                size={11}
                            />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </TouchableWithoutFeedback>
    )
}