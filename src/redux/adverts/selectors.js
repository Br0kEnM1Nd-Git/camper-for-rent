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
        if (!!filters.location) return filters.location === location;

        if (filters.equipment.length > 0) {
          const equipmentFilters = {};

          filters.equipment.forEach(el => {
            equipmentFilters[el] = el;
          });

          if (!!equipmentFilters.ac) return !!ac;
          if (!!equipmentFilters.automatic)
            return equipmentFilters.automatic === transmission;
          if (!!equipmentFilters.kitchen) return !!kitchen;
          if (!!equipmentFilters.tv) return !!tv;
          if (!!equipmentFilters.shower) return !!shower;
        }

        if (!!filters.type) return filters.type === form;

        return true;
      }
    )
);

export { selectAdverts, selectFilteredAdverts };
