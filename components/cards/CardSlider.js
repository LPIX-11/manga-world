import React from 'react';
import { ScrollView, Dimensions } from 'react-native';

import styled from 'styled-components';

const screenWidth = Dimensions.get('window').width;

export default CardSilder = ({ children }) => {

    return (
        <Container>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
            >
                {children}
            </ScrollView>
        </Container>
    )
}

const Container = styled.View`
    width: ${screenWidth}px;
`;