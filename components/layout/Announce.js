import React from 'react';
import CustomText from "../texts/CustomText";
import Wrapper from './Wrapper';

export default Announce = ({ title, children }) => {
    return (
        <Wrapper>
            <CustomText
                paddingTop={20}
                paddingLeft={11}
                paddingBottom={5}
                size={14}
                text={`Now Discover: ${title}`}
                textWeight={'700'}
            />

            {children}
        </Wrapper>
    )
}
