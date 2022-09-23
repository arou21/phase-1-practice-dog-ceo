document.addEventListener('DOMContentLoaded', () => {
  const breedDropDown = document.getElementById('breed-dropdown')
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreeds = document.getElementById('dog-breeds')
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const imageContainer = document.getElementById('dog-image-container')
  fetch(imgUrl).then(res => res.json()).then(data => {
    console.log(data)
    data.message.forEach(img => {
      imageContainer.innerHTML += `
    <img src = '${img}'/>
  `
    });
  })
  function getDogBreed(filter) {

  fetch(breedUrl).then(res => res.json()).then(data=> {
    console.log (data)
    Object.keys(data.message).forEach(breed => {
      if (!filter || breed [0] === filter) {

      dogBreeds.innerHTML += `
        <li onclick = "this.style = 'color: red'"> 
            ${breed}
            <ul>
              ${data.message[breed].map(subbreed => {
                  return `
                    <li>
                      ${subbreed}
                    </li>
                  `
              }).join('')}
            </ul>
        </li>
      `
    }
    })
  })
}
getDogBreed()
  breedDropDown.addEventListener('change', () => {
    const value = breedDropDown.value
    console.log(value)
    dogBreeds.innerHTML = ''
    getDogBreed(value)
  })
})