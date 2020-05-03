import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Left, Button, Right } from 'native-base';

import CustomText from '../texts/CustomText';


export default MangaCard = props => {
    return (
        <Card style={{ width: 130, marginEnd: 15 }}>
            <CardItem cardBody>
                <Image source={ props.mangaImage } style={{ height: 200, flex: 1 }} />
            </CardItem>
        </Card>
    )
}