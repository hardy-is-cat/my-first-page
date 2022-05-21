const bgImages = ["bg_01.jpg", "bg_02.jpg", "bg_03.jpg", "bg_04.jpg", "bg_05.jpg", "bg_06.jpg"]

function handleBodyBg() {
  const image = bgImages[Math.floor(Math.random()*bgImages.length)]
  const BG_URL = `url(images/${image})`
  const login = document.querySelector("#login")
  document.body.style.backgroundImage = BG_URL
  login.style.background = BG_URL
}

handleBodyBg()