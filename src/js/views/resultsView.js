import View from './View';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(this.__generateMarkupPreview).join('');
  }

  __generateMarkupPreview(result) {
    const { id, image, title, publisher } = result;
    return `
    <li class="preview">
        <a class="preview__link preview__link--active" href="#${id}">
          <figure class="preview__fig">
            <img src=${image} alt=${title} />
          </figure>
            <div class="preview__data">
                <h4 class="preview__title">${title}</h4>
                <p class="preview__publisher">${publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
    </li>
`;
  }
}

export default new ResultsView();
