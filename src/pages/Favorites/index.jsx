import CatalogFilterForm from 'components/Catalog/FilterForm';
import {
  CamperCardsContainer,
  CatalogContainer,
  CatalogPageContainer,
  LoadMoreButton,
} from './Favorites.styled';
import CamperCard from 'components/Catalog/CamperCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllAdvertsThunk } from '../../redux/adverts/thunks';
import { selectFilteredAdverts } from '../../redux/adverts/selectors';
import { v4 as uuid } from 'uuid';
import { selectFavorites } from '../../redux/favorites/selectors';

const FavoritesPage = () => {
  const [page, setPage] = useState(1);
  const handleLoadMore = () => setPage(page + 1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdvertsThunk());
  }, [dispatch]);

  const filteredAdverts = useSelector(selectFilteredAdverts);
  const shownAdverts = filteredAdverts.slice(0, 4 * page);
  const isShownButton = shownAdverts.length !== filteredAdverts.length;

  const favoritedAdverts = useSelector(selectFavorites);

  return (
    <CatalogPageContainer>
      <CatalogFilterForm />

      <CatalogContainer>
        <CamperCardsContainer>
          {filteredAdverts.length > 0
            ? shownAdverts.map(advert => {
                const isFavorited = favoritedAdverts.indexOf(advert._id) >= 0;

                if (!isFavorited) return null;

                return (
                  <CamperCard
                    key={uuid()}
                    camperInfo={advert}
                    favorited={isFavorited}
                  />
                );
              })
            : 'Nothing found'}
        </CamperCardsContainer>

        {isShownButton && (
          <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
        )}
      </CatalogContainer>
    </CatalogPageContainer>
  );
};

export default FavoritesPage;
