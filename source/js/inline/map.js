(function () {
  const ZOOM = 16;

  const list = document.querySelector('.stores-on-the-map__stores');
  const stores = list.querySelectorAll('.stores-on-the-map__store-btn');
  const map = document.querySelector('#map');

  if (!map) {
    return;
  }

  const coords = Array.from(stores).map((store) => JSON.parse(store.dataset.coords));

  // eslint-disable-next-line no-undef
  ymaps.ready(function () {

    // eslint-disable-next-line no-undef
    const myMap = new ymaps.Map(map, {
      center: coords[0],
      controls: ['zoomControl'],
      zoom: ZOOM,
    });

    // eslint-disable-next-line no-undef
    const placemarks = coords.map((item) => new ymaps.Placemark(item));

    const onStoreBtnClick = ({ target }) => {
      if (target.closest('.stores-on-the-map__store-btn')) {
        if (target.classList.contains('is-active')) {
          return;
        }

        const targetCoords = JSON.parse(target.dataset.coords);
        const activeLocation = list.querySelector('.is-active');

        activeLocation.classList.remove('is-active');
        target.classList.add('is-active');

        myMap.setCenter(targetCoords, ZOOM, {
          duration: 500,
        });
      }
    };

    placemarks.forEach((placemark) => {
      myMap.geoObjects.add(placemark);
    });

    if (list) {
      list.addEventListener('click', onStoreBtnClick);
    }
  });
}());
