const pictureDiv = document.querySelector('.container');
const refresh = document.querySelector('.refresh');
const picSizeArray = ['thumbnail', 'medium', 'large'];

const pickRandomElement = (array) => {
  let randomInt = Math.floor(Math.random() * (array.length))
  return array[randomInt]
}

const renderImage = (pic, picSize) => {
  let newImg = document.createElement('img');
  newImg.setAttribute('src', pic.picture[picSize]);
  newImg.setAttribute('class', `pic ${picSize}`);
  pictureDiv.appendChild(newImg);
}

refresh.addEventListener('click', () => {
  pictureDiv.innerHTML = '';
  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        let picSize = pickRandomElement(picSizeArray);
        renderImage(data.results[i], picSize);
      }
    })
})
