import CatalogFilterForm from 'components/Catalog/FilterForm';
import { CatalogPageContainer } from './Catalog.styled';
import CamperCard from 'components/Catalog/CamperCard';

const CatalogPage = () => {
  return (
    <CatalogPageContainer>
      <CatalogFilterForm />
      <div>
        <CamperCard />
      </div>
    </CatalogPageContainer>
  );
};

export default CatalogPage;
