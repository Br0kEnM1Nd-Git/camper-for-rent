import { useNavigate } from 'react-router-dom';
import { HomeContainer, HomeTitle, StartNowBtn } from './Home.styled';

const HomePage = () => {
  const navigate = useNavigate();
  const handleStart = () => navigate('/catalog');

  return (
    <HomeContainer>
      <HomeTitle>Ready to enjoy your weekend?</HomeTitle>
      <StartNowBtn onClick={handleStart}>Start now</StartNowBtn>
    </HomeContainer>
  );
};

export default HomePage;
