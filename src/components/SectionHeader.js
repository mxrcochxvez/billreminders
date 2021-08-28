import React, {Fragment} from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: #c9c9c9;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  &::after {
    content: "";
    background-color: #c9c9c9;
    height: 1px;
    width: 50px;
  }
  
  &::before {
    content: "";
    background-color: #c9c9c9;
    height: 1px;
    width: 50px;
  }
`

const SectionHeader = ({title}) => {
    return(
        <Fragment>
            <Header>{title}</Header>
        </Fragment>
    )
}

export default SectionHeader;