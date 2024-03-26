import { Field, Form, Formik } from 'formik';
import sprite from 'assets/svg/sprite.svg';
import {
  ButtonGroup,
  FilterButton,
  FilterIcon,
  SearchButton,
} from './FilterForm.styled';

const CatalogFilterForm = () => {
  const initialValues = {
    equipment: [],
    type: '',
  };

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <span>Location</span>
          <div>
            <label>
              <svg width="18px" height="20px" fill="none">
                {/* <use href={`${sprite}#icon`} /> */}
              </svg>
            </label>
            <Field
              type="text"
              name="location"
              id="location"
              placeholder="City"
            />
          </div>

          <span>Filters</span>

          <h2 id="vehicle-equipment-group">Vehicle equipment</h2>

          <hr />

          <ButtonGroup role="group" aria-labelledby="vehicle-equipment-group">
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
          </ButtonGroup>

          <h2 id="vehicle-type-group">Vehicle type</h2>

          <hr />

          <ButtonGroup role="group" aria-labelledby="vehicle-type-group">
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
          </ButtonGroup>

          <SearchButton type="submit">Search</SearchButton>
        </Form>
      </Formik>
    </div>
  );
};

export default CatalogFilterForm;
