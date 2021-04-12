import styled from 'styled-components';
import React from 'react';
import { Props } from '.';
import { mainCard } from 'styles';
export const style = (Component: React.FC<Props>) => styled(Component)`
${mainCard}
background-color: #D3C3B6;
li{
    transition: .3s;
}
`;
