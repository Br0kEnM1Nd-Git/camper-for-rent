import CatalogFilterForm from 'components/Catalog/FilterForm';
import {
  CamperCardsContainer,
  CatalogContainer,
  CatalogPageContainer,
  LoadMoreButton,
} from './Catalog.styled';
import CamperCard from 'components/Catalog/CamperCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllAdvertsThunk } from '../../redux/adverts/thunks';
import { selectAdverts } from '../../redux/adverts/selectors';
import { v4 as uuid } from 'uuid';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const handleLoadMore = () => setPage(page + 1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdvertsThunk());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);
  const shownAdverts = adverts.slice(0, 4 * page);
  const isShownButton = shownAdverts.length !== adverts.length;

  return (
    <CatalogPageContainer>
      <CatalogFilterForm />

      <CatalogContainer>
        <CamperCardsContainer>
          {adverts.length > 0 &&
            shownAdverts.map(advert => (
              <CamperCard key={uuid()} camperInfo={advert} />
            ))}
        </CamperCardsContainer>

        {isShownButton && (
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        )}
      </CatalogContainer>
    </CatalogPageContainer>
  );
};

export default CatalogPage;
