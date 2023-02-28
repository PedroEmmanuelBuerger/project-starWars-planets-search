import { useContext } from 'react';
import starWarsContext from '../context/StarWarsContext';

const FilterPlantes = () => {
  const { data, nameFilter, numericFilters } = useContext(starWarsContext);
  const planetsByFilteredName = data.filter((planet) => planet.name
    .toLowerCase().includes(nameFilter));

  const filteredByNumbersMap = numericFilters.map((filter) => {
    const { column, comparison, value } = filter;
    const filteredByNumber = planetsByFilteredName.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === Number(value);
      }
      return false;
    });
    return filteredByNumber;
  });

  const allPLanes = filteredByNumbersMap.reduce((acc, curr) => {
    const newAcc = acc.filter((planet) => curr.includes(planet));
    return newAcc;
  }, planetsByFilteredName);

  console.log(allPLanes);

  return allPLanes;
};

export default FilterPlantes;
