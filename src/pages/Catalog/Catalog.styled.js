import styled from 'styled-components';

export const CatalogPageContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > div:first-child {
    width: 40%;
  }
  & > div:last-child {
    width: 60%;
  }
`;
