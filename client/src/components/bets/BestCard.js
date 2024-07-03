import React from 'react';
import styled from 'styled-components';
import Heading from '../typography/Heading';
import betImage from '../../assets/img/bet_image.webp';

const StyledBetsCardWrapper = styled.div`
  position: relative;
  height: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.playingCardBg};
  border-radius: ${(props) => props.theme.other.stdBorderRadius};
  padding: 1.5rem 2rem;
  box-shadow: ${(props) => props.theme.other.cardDropShadow};
  img {
    width: ${({ width }) => width || '7vw'};
    max-width: ${({ maxWidth }) => maxWidth || '120px'};
    min-width: ${({ minWidth }) => minWidth || '50px'};
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  ${Heading} {
    margin-bottom: 0;
    color: ${(props) => props.theme.colors.primaryCta};
    word-wrap: break-word;
  }
`;

const HotTag = styled.div`
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #ee0000;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 5px;
  z-index: 1;
`;

const BetsCard = ({ width, minWidth, maxWidth }) => {

    return (
        <StyledBetsCardWrapper
            width={width}
            minWidth={minWidth}
            maxWidth={maxWidth}
        >
            <HotTag>HOT</HotTag>
            <Heading as="h4" headingClass="h6" textCentered>
                {"Mức cược".toUpperCase()}
            </Heading>
            <img src={betImage} alt="Join Table" />

            <Heading as="h4" headingClass="h4" textCentered>
                {"Cơ bản".toUpperCase()}
            </Heading>

            <div>50K / 100K</div>
            <div>(1M / 20M)</div>


        </StyledBetsCardWrapper>
    );
};

export default BetsCard;
