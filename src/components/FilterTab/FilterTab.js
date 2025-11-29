import './FilterTab.scss'
export const FilterTab = (name, isActive, count) => {

    return `
    <li class="filters__tab ${isActive ? 'active' : ''}" data-filter="${name}">
        <p class="tab-name">${name}</p>
        <p class="tab-count">${count}</p>
    </li>
  `

} 