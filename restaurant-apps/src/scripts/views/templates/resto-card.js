import CONFIG from '../../globals/config';

const restoCard = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image" crossorigin="anonymous" alt="${
            resto.name
          }" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
          <span tabindex="0" class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <h2 class="card-content-title">${resto.name}</h2>
          <p class="card-city">${resto.city}</p>
          <p class="truncate">${resto.description}</p>
        </div>
      </a>
    </div>
  `;

export default restoCard;