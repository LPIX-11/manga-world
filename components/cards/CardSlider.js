import React, { useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components';

const screenWidth = Dimensions.get('window').width;

export default CardSilder = ({ children }) => {

    return (
        <Container>
            <SliderContent>
                { children }
            </SliderContent>
        </Container>
    )
}

const Container = styled.View`
    position: relative;
    width: ${screenWidth}px;
    margin: 0 auto;
    overflow: hidden;
`;
console.log(`${props => props.width}`)
const SliderContent = styled.View`
    display: flex;
    flex-direction: row;
    width: 200px; 
`;