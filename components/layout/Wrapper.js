import React from 'react';
import { Container, Content } from 'native-base';

const Wrapper = ({ children }) => {
    return (
        <Container>
            <Content>
                { children }
            </Content>
        </Container>
    )
}

export default Wrapper;