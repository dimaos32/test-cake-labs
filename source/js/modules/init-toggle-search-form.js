const initToggleSearchForm = () => {
  const search = document.querySelector('.header__search');

  if (!search) {
    return;
  }

  const toggle = search.querySelector('.header__search-toggle');
  const form = search.querySelector('.header__search-form');
  const input = form.querySelector('.header__search-input');

  const onToggleClick = () => {
    form.classList.add('is-shown');

    setTimeout(() => {
      input.focus();
    }, 100)
  }

  const onInputBlur = () => {
    form.classList.remove('is-shown');
  }

  toggle.addEventListener('click', onToggleClick);
  input.addEventListener('blur', onInputBlur);
}

export { initToggleSearchForm };
