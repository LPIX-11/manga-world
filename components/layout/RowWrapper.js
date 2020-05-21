import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';

import CardSlider from '../cards/CardSlider';
import styled from 'styled-components';
import CustomText from '../texts/CustomText';

export default RowWrapper = ({ title, children }) => {
    return (
        <Container style={{ paddingVertical: 12 }}>
            <CustomText
                paddingLeft={11}
                paddingBottom={5}
                size={14}
                text={title}
                bold
            />
            <Grid style={{ height: 200 }}>
                {/*  backgroundColor: '#EDEDED', */}
                <Row style={{ backgroundColor: '#000', borderColor: '#2D2D2D', border: 1, height: 200, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <CardSlider>
                        {children}
                    </CardSlider>
                </Row>
            </Grid>
        </Container>
    )
}

const Container = styled.View``;