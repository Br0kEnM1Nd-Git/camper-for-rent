import styled from 'styled-components';
import { PrimaryButton } from 'styles/components.styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MainLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const SecondaryLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Description = styled.p`
  color: var(--secondary);

  overflow: hidden;
`;

export const DetailsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const ShowMoreButton = styled(PrimaryButton)`
  padding: 16px 40px;
`;
