import icons from 'url:../../img/icons.svg';

import View from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload ');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn-add-recipe ');

  _generateMarkup() {}
}

export default new AddRecipeView();
