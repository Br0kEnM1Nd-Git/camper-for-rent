import styled from 'styled-components';
import { PrimaryButton } from 'styles/components.styled';
import homeBackground from 'assets/img/home-background.jpg';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  height: 100%;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${homeBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  color: #ffffff;
`;

export const StartNowBtn = styled(PrimaryButton)`
  max-width: 200px;
  max-height: 70px;
  padding: 20px 60px;

  font-size: 18px;
`;
