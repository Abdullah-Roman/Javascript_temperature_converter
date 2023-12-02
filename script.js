let btn = document.querySelector('.btn');
let celcius = document.querySelector('.celcius');
let farenhite = document.querySelector('.farenhite');
let kelvin = document.querySelector('.kelvin');
let weather = document.querySelector('.weather');

let lastEdit = '';

const conditionImage = {
  superCold:
    'https://images.unsplash.com/photo-1549472579-e133f59d8b23?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  extraCold:
    'https://images.unsplash.com/photo-1551701113-60eec9564876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80',
  cold: 'https://images.unsplash.com/photo-1593435713463-e8bf5bea9786?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
  normalCold:
    'https://images.unsplash.com/photo-1603739421258-4aa79ad860df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80',
  normal:
    'https://images.unsplash.com/photo-1557764459-ec0f03edcfca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
  sunny:
    'https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  desert:
    'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  muri: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  lava: 'https://images.unsplash.com/photo-1554232682-b9ef9c92f8de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
};

const updateImage = temp => {
  if (temp < 0) {
    weather.setAttribute('src', conditionImage.superCold);
  } else if (temp > 0 && temp <= 20) {
    weather.setAttribute('src', conditionImage.cold);
  } else if (temp > 20 && temp <= 30) {
    weather.setAttribute('src', conditionImage.normal);
  } else if (temp > 30 && temp <= 50) {
    weather.setAttribute('src', conditionImage.sunny);
  } else if (temp > 50) {
    weather.setAttribute('src', conditionImage.desert);
  }
};

const updateEdit = () => {
  celcius.addEventListener('keyup', e => {
    lastEdit = 'celcius';
  });
  farenhite.addEventListener('keyup', e => {
    lastEdit = 'farenhite';
    console.log(farenhite.value);
  });
  kelvin.addEventListener('keyup', e => {
    lastEdit = 'kelvin';
  });
};

updateEdit();

const converter = lastEdited => {
  if (lastEdited === 'celcius') {
    const fVlue = (parseFloat(celcius.value) * 9) / 5 + 32;
    const kVlue = parseFloat(celcius.value) + 273;

    farenhite.value = Math.floor(fVlue) + ' °F';
    kelvin.value = Math.floor(kVlue) + ' K';
  } else if (lastEdited === 'farenhite') {
    const cVlue = ((parseFloat(farenhite.value) - 32) * 5) / 9;
    const kVlue = ((parseFloat(farenhite.value) - 32) * 5) / 9 + 273;

    celcius.value = Math.floor(cVlue) + ' °C';
    kelvin.value = Math.floor(kVlue) + ' K';
    console.log(celcius.value);
  } else if (lastEdited === 'kelvin') {
    const cVlue = parseFloat(kelvin.value) - 273;
    const fVlue = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;

    celcius.value = Math.floor(cVlue) + ' °C';
    farenhite.value = Math.floor(fVlue) + ' °F';
  }
};

btn.addEventListener('click', () => {
  converter(lastEdit);

  let temp = 0;
  if (lastEdit === 'celcius') {
    temp = celcius.value;
  } else if (lastEdit === 'farenhite') {
    temp = ((parseFloat(farenhite.value) - 32) * 5) / 9;
  } else if (lastEdit === 'kelvin') {
    temp = parseFloat(kelvin.value) - 273;
  }

  updateImage(temp);
});
