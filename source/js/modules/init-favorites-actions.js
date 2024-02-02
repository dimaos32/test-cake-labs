const initFavoritesActions = () => {
  const addToFavorites = (btn) => {
    btn.classList.add('is-favorite');

    console.log('Имитация добавления товара в избранное');
  }

  const removeFromFavorites = (btn) => {
    btn.classList.remove('is-favorite');

    console.log('Имитация удаления товара из избранного');
  }

  const onFavoriteBtnClick = ({ target }) => {
    const favoritesBtn = target.closest('.product-card__favorite-btn');

    if (favoritesBtn) {
      if (favoritesBtn.classList.contains('is-favorite')) {
        removeFromFavorites(favoritesBtn);
      } else {
        addToFavorites(favoritesBtn);
      }
    }
  }

  document.addEventListener('click', onFavoriteBtnClick);
};

export { initFavoritesActions };
