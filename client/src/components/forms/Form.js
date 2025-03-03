import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  text-align: center;
  background-color: ${(props) => props.theme.colors.lightBg};
  border-radius: ${(props) => props.theme.other.stdBorderRadius};
  padding: 1.5rem;
  box-shadow: ${(props) => props.theme.other.cardDropShadow};
  @media screen and (min-width: 1024px) {
    max-width: 580px;
  }
`;
