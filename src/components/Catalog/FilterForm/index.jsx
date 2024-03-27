import { Field, Form, Formik } from 'formik';
import sprite from 'assets/svg/sprite.svg';
import {
  EquipmentButtonGroup,
  FilterButton,
  FilterContainer,
  FilterHeader,
  FilterIcon,
  FilterTag,
  HorizontalLine,
  LocationContainer,
  LocationInput,
  LocationTag,
  SearchButton,
  TypeButtonGroup,
} from './FilterForm.styled';

const CatalogFilterForm = () => {
  const initialValues = {
    location: '',
    equipment: [],
    type: '',
  };

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <FilterContainer>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off" noValidate>
          <LocationTag>Location</LocationTag>

          <LocationContainer>
            <svg width="18px" height="20px" fill="none">
              <use href={`${sprite}#icon-location`} />
            </svg>
            <LocationInput
              type="text"
              name="location"
              id="location"
              placeholder="City"
            />
          </LocationContainer>

          <FilterTag>Filters</FilterTag>

          <FilterHeader id="vehicle-equipment-group">
            Vehicle equipment
          </FilterHeader>

          <HorizontalLine />

          <EquipmentButtonGroup
            role="group"
            aria-labelledby="vehicle-equipment-group"
          >
            <FilterButton>
              <Field type="checkbox" name="equipment" value="ac" hidden />
              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-ac`} />
              </FilterIcon>
              AC-icon
              <p>AC</p>
            </FilterButton>

            <FilterButton>
              <Field
                type="checkbox"
                name="equipment"
                value="automatic"
                hidden
              />

              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-transmission`} />
              </FilterIcon>

              <p>Automatic</p>
            </FilterButton>

            <FilterButton>
              <Field type="checkbox" name="equipment" value="kitchen" hidden />

              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-kitchen`} />
              </FilterIcon>

              <p>Kitchen</p>
            </FilterButton>

            <FilterButton>
              <Field type="checkbox" name="equipment" value="tv" hidden />

              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-tv`} />
              </FilterIcon>

              <p>TV</p>
            </FilterButton>

            <FilterButton>
              <Field
                type="checkbox"
                name="equipment"
                value="shower/wc"
                hidden
              />

              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-shower`} />
              </FilterIcon>

              <p>Shower/WC</p>
            </FilterButton>
          </EquipmentButtonGroup>

          <FilterHeader id="vehicle-type-group">Vehicle type</FilterHeader>

          <HorizontalLine />

          <TypeButtonGroup role="group" aria-labelledby="vehicle-type-group">
            <FilterButton>
              <Field type="radio" name="type" value="van" hidden />
              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-van`} />
              </FilterIcon>
              <p>Van</p>
            </FilterButton>

            <FilterButton>
              <Field type="radio" name="type" value="integrated" hidden />

              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-integrated`} />
              </FilterIcon>

              <p>Fully Integrated</p>
            </FilterButton>

            <FilterButton>
              <Field type="radio" name="type" value="alcove" hidden />

              <FilterIcon width="32px" height="32px" fill="none">
                <use href={`${sprite}#icon-alcove`} />
              </FilterIcon>

              <p>Alcove</p>
            </FilterButton>
          </TypeButtonGroup>

          <SearchButton type="submit">Search</SearchButton>
        </Form>
      </Formik>
    </FilterContainer>
  );
};

export default CatalogFilterForm;
