import React from 'react';
import { Icon } from 'native-base';

import CustomText from '../texts/CustomText';
import styled from 'styled-components';

export default CustomButton = props => {
    const Button = styled.TouchableOpacity`
        align-items: center;
        background-color: ${props.background ? props.background : '#DEDEDE'};
        box-shadow: ${props.shadow ? props.shadow : '0px 0px 0px #00000000'};
        border-radius: ${props.radius ? props.radius : '0'}px;
        flex-direction: row;
        justify-content: ${props.positionItems ? props.positionItems : 'flex-start'};
        padding-top: ${props.spaceTop ? props.spaceTop : '0'}px;
        padding-right: ${props.spaceRight ? props.spaceRight : '0'}px;
        padding-bottom: ${props.spaceBottom ? props.spaceBottom : '0'}px;
        padding-left: ${props.spaceLeft ? props.spaceLeft : '0'}px;
        width: ${props.buttonWidth ? props.buttonWidth : '50'}px;
    `;

    if (props.message && props.icon) {
        return (
            <Button {...props}>
                <CustomText
                    paddingTop={props.paddingTop}
                    paddingRight={props.paddingRight}
                    paddingBottom={props.paddingBottom}
                    paddingLeft={props.paddingLeft}
                    size={props.textSize}
                    text={props.message}
                    width={props.width}
                />
                <Icon
                    type={props.iconType}

                    style={{
                        color: props.iconColor,
                        fontSize: props.iconSize,
                        shadowColor: props.iconShadow ? props.iconShadow : '#00000000',
                        shadowOffset: {
                            width: props.iconShadowOffsetWidth,
                            height: props.iconShadowOffsetHeight,
                        },
                        shadowOpacity: props.iconShadowOpacity ? props.iconShadowOpacity : 0,
                        shadowRadius: props.iconShadowRadius ? props.iconShadowRadius : 0,
                        elevation: props.iconShadowElevation ? props.iconShadowElevation : 0,
                    }}
                    name={props.iconName}
                />

            </Button>
        )
    }

    if (props.message) {
        return (
            <Button {...props}>
                <CustomText
                    alignText={'justify'}
                    paddingTop={props.paddingTop}
                    paddingRight={props.paddingRight}
                    paddingBottom={props.paddingBottom}
                    paddingLeft={props.paddingLeft}
                    size={props.textSize}
                    text={props.message}
                    width={props.width}
                />
            </Button>
        )
    }

    if (props.icon) {
        return (
            <Button {...props}>
                <Icon
                    type={props.iconType}
                    style={{
                        color: props.iconColor,
                        shadowColor: props.iconShadow ? props.iconShadow : '#00000000',
                        shadowOffset: {
                            width: props.iconShadowOffsetWidth,
                            height: props.iconShadowOffsetHeight,
                        },
                        shadowOpacity: props.iconShadowOpacity ? props.iconShadowOpacity : 0,
                        shadowRadius: props.iconShadowRadius ? props.iconShadowRadius : 0,
                        elevation: props.iconShadowElevation ? props.iconShadowElevation : 0,
                    }}
                    name={props.iconName}
                />
            </Button>
        )
    }

}