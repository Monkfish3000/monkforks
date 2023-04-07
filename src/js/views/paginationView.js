import icons from 'url:../../img/icons.svg';

import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // Page 1, more pages
    if (currentPage === 1 && numPages > 1) {
      return 'page 1 of many';
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>`;
    }
    // Other page
    if (currentPage < numPages) {
      return 'other page';
    }
    // Page 1, only 1 page
    return 'only 1 page';
  }
}

export default new PaginationView();
