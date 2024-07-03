import React from 'react';
import Container from '../components/layout/Container';
import { RotateDevicePrompt } from '../components/game/RotateDevicePrompt';
import { withRouter } from 'react-router-dom';
import { PositionedUISlot } from '../components/game/PositionedUISlot';
import { BetsWrapper } from '../components/bets/BetsWrapper';
import BetsCard from '../components/bets/BestCard';

const BetLists = ({ history }) => {

    return (
        <>
            <RotateDevicePrompt />
            <Container fullHeight>
                <BetsWrapper
                    bottom="1vh"
                    left="1.5rem"
                    scale="0.65"
                    style={{ zIndex: '50' }}
                >
                    {[1, 2, 3, 4, 5, 6]?.map((data) => <BetsCard />)}
                </BetsWrapper>
            </Container>
        </>
    );
};

export default withRouter(BetLists);
