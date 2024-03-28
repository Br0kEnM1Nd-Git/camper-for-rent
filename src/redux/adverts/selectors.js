import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

const selectAdverts = state => state.adverts;

const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filters) =>
    adverts.filter(
      ({
        transmission,
        form,
        location,
        details: { kitchen, shower, TV: tv, airConditioner: ac },
      }) => {
        if (!!filters.location)
          if (!location.toLowerCase().includes(filters.location.toLowerCase()))
            return false;

        if (filters.equipment.length > 0) {
          const equipmentFilters = {};

          filters.equipment.forEach(el => {
            equipmentFilters[el] = el;
          });

          if (!!equipmentFilters.ac) if (!ac) return false;
          if (!!equipmentFilters.automatic)
            if (equipmentFilters.automatic !== transmission) return false;
          if (!!equipmentFilters.kitchen) if (!kitchen) return false;
          if (!!equipmentFilters.tv) if (!tv) return false;
          if (!!equipmentFilters.shower) if (!shower) return false;
        }

        if (!!filters.type) if (filters.type !== form) return false;

        return true;
      }
    )
);

export { selectAdverts, selectFilteredAdverts };
