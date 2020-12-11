const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
// Create map
const map = L.map('mapid', options).setView([-22.5517946,-45.7789629], 16);

// Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",).addTo(map);
// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})
// Create and add marker
const spanLat = document.querySelector('span[data-lata]')
const spanLng = document.querySelector('span[data-lng]')
console.log(spanLat)
L
.marker([-22.5517946,-45.7789629], { icon })
.addTo(map)

/* Image gallery */

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    
    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    // atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar a classe .active para esse botão
    button.classList.add('active')
}