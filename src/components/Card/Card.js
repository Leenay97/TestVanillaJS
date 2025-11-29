
import './Card.scss'
export const Card = (card) => {

    const url = new URL(`../../assets/img/cards/${card.image}`, import.meta.url).href;

    let areaColor = '#279bb6ff';

    switch (card.area) {
        case 'Marketing':
            areaColor = '#03CEA4';
            break;
        case 'Management':
            areaColor = '#5A87FC';
            break;
        case 'HR & Recruting':
            areaColor = '#F89828';
            break;
        case 'Design':
            areaColor = '#F52F6E';
            break;
        case 'Development':
            areaColor = '#7772F1';
            break;
        default:
            areaColor = '#279bb6ff';
    }

    return `
    <div class="card">
        <img class="card__image" src="${url}"/>
        <div class="card__info">
            <div class="card__area" style="background-color: ${areaColor}">${card.area}</div>
            <div class="card__name">${card.name}</div>
            <div class="card__footer">
                <div class="card__price">$${card.price}</div>
                <div class="card__author">| by ${card.author}</div>
            </div>
        </div>
    </div>
    `
}