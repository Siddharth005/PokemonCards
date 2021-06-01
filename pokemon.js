const body = document.querySelector('body')
const container = document.createElement('div')
container.classList.add('container')
container.style.alignItems = 'center'
body.appendChild(container)


for (let i = 1; i < 152; i++) {
    const div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('m-5')
    div.classList.add('sizing')
    const image = document.createElement('img')
    image.classList.add("card-img-top")
    image.classList.add("imgSize")

    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    const cardbody = document.createElement('div')
    cardbody.classList.add('card-body')
    const link = document.createElement('a')
    link.classList.add("btn")
    link.classList.add("btn-warning")
    link.innerText = "Know"


    //appending link in card body
    cardbody.appendChild(link)

    //appending image and cardbody in div
    div.appendChild(image)
    div.appendChild(cardbody)

    //appending div in container
    container.appendChild(div)
}