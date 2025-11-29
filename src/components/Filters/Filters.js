import '../FilterTab/FilterTab'
import { FilterTab } from '../FilterTab/FilterTab'
import './Filters.scss'


export const Filters = (filters, chosenFilter = 'All', coursesAmount) => {
  
  const findAmount = (area) => {
    if (area === 'HR & Recruting') return coursesAmount.hr;

    return coursesAmount[area.toLowerCase()] || 0;
  };

  return `
    <ul class="filters">
      ${filters.map(filter => 
        FilterTab(filter, filter === chosenFilter, findAmount(filter))
      ).join('')}
    </ul>
  `;
};