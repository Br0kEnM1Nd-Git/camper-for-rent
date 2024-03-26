import styled from 'styled-components';
import { PrimaryButton } from 'styles/components.styled';

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px 10px;
`;

export const FilterButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17.5px 0;
  width: calc((100% - 30px) / 3);
  height: 95px;

  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;

  cursor: pointer;

  &:hover,
  &:has(input:checked) {
    border-color: var(--button);
  }
`;

export const FilterIcon = styled.svg`
  stroke: var(--main);
`;

export const SearchButton = styled(PrimaryButton)`
  padding: 16px 60px;
`;
