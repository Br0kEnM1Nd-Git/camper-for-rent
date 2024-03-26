import sprite from 'assets/svg/sprite.svg';
import {
  CardContainer,
  DetailsContainer,
  LocationContainer,
  MainInfoContainer,
  MainLineContainer,
  SecondaryInfoContainer,
  SecondaryLineContainer,
  ShowMoreButton,
} from './CamperCard.styled';

const CamperCard = () => {
  return (
    <CardContainer>
      <div>
        <img src="" alt="Camper" />
      </div>

      <div>
        <MainLineContainer>
          <MainInfoContainer>
            <h3>Car name</h3>

            <span>Price</span>
          </MainInfoContainer>

          <svg width="24px" height="24px" fill="none">
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </MainLineContainer>

        <SecondaryLineContainer>
          <svg width="24px" height="24px" fill="none">
            <use href={`${sprite}#icon-star`} />
          </svg>

          <SecondaryInfoContainer>
            <span>Rating & Reviews count</span>

            <LocationContainer>
              <svg width="16px" height="16px" fill="none">
                <use href={`${sprite}#icon-location`} />
              </svg>
              <span>Location</span>
            </LocationContainer>
          </SecondaryInfoContainer>
        </SecondaryLineContainer>

        <p>Description</p>

        <DetailsContainer>
          {/* {equipment.map(el => {
                      return <li></li>
                  }) } */}
        </DetailsContainer>

        <ShowMoreButton>Show More</ShowMoreButton>
      </div>
    </CardContainer>
  );
};

export default CamperCard;
