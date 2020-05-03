import React from 'react';
import { Row, Grid } from 'react-native-easy-grid';

import CardSlider from '../cards/CardSlider';
import styled from 'styled-components';

export default RowWrapper = ({ children }) => {
    return (
        <Container style={{ paddingVertical: 12 }}>
            <Grid>
                <Row style={{ backgroundColor: '#EDEDED', borderColor: '#2D2D2D', border: 1, height: 200, paddingHorizontal: 10, paddingTop: 5, paddingBottom: 10 }}>
                    <CardSlider>
                        { children }
                    </CardSlider>
                </Row>
            </Grid>
        </Container>
    )
}

const Container = styled.View``;