function select(selector) {
  const elem = document.querySelector(selector);

  if (elem) {
    const option = {
      val: function (newValue = null) {
        if (newValue || newValue === '') {
          return (elem.value = newValue);
        }

        return elem.value;
      },

      hide: function () {
        return elem.classList.add('hide');
      },

      show: function () {
        return elem.classList.remove('hide');
      },

      on: function (action, callback) {
        return elem.addEventListener(action, callback);
      },

      css: function (property, value) {
        return (elem.style[property] = value);
      },

      addClass: function (className) {
        return elem.classList.add(className);
      },

      removeClass: function (className) {
        return elem.classList.remove(className);
      },
    };

    Object.assign(elem, option);

    return elem;
  }

  return;
}
