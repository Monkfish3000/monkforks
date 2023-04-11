import icons from 'url:../../img/icons.svg';

import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errormessage = 'No recipes found. Please search for different recipe.';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    const curId = window.location.hash.slice(1);

    const { id, image, title, publisher } = result;
    return `
    <li class="preview">
        <a class="preview__link ${
          id === curId ? 'preview__link--active' : ''
        }" href="#${id}">
          <figure class="preview__fig">
            <img src=${image} alt=${title} />
          </figure>
            <div class="preview__data">
                <h4 class="preview__title">${title}</h4>
                <p class="preview__publisher">${publisher}</p>
          </div>
        </a>
    </li>
`;
  }
}

export default new ResultsView();
