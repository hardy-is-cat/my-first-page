const login = document.querySelector("#login")
const loginForm = document.querySelector(".login__form")
const loginInput = document.querySelector(".login__input")
const loginBtn = document.querySelector(".login__submit")

const USERNAME_KEY = "userName"
const firstGreeting = document.querySelector("h2.greeting")

function showGreeting(username) {
  firstGreeting.innerText = `안녕하세요 ${username}님`
  login.style.visibility = "hidden"
}

function handleLoginSubmit(event) {
  event.preventDefault()
  const userName = loginInput.value
  localStorage.setItem(USERNAME_KEY, userName)
  login.style.visibility = "hidden"
  showGreeting(userName)
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
  login.style.visibility = "visible"
  loginForm.addEventListener("submit", handleLoginSubmit)
} else {
  showGreeting(localStorage.userName)
}

// 사용자 프로필 인사말
const greetingSentence = {
  morning: [
    "좋은 아침입니다. 힘찬 하루 되세요!",
    "새로운 날이 밝았네요. 오늘도 힘내세요!",
    "상쾌한 아침이예요. 잘 주무셨나요?"
  ],
  lunch: [
    "점심 식사는 맛나게! 오후 일과는 힘차게!",
    "지치는 오후 시간입니다. 따뜻한 커피와 간식과 함께 힘내세요!",
    "점심 맛있게 드시고 오후도 활기차게 파이팅 하세요!"
  ],
  evening: [
    "소중한 하루 수고 많으셨습니다.",
    "편안한 밤 되시고 좋은 꿈 꾸세요. 오늘 하루도 고생하셨습니다.",
    "또 하루가 지나고 밤이 왔네요, 따스하고 편안한 쉼 하세요"
  ]
}

const secondGreeting = document.querySelector("p.greeting")

function handleGreeting() {
  const date = new Date()
  const now = date.getHours()
  const greetingIndex = Math.floor(Math.random()*greetingSentence.morning.length)
  if (now < 12 && now > 5) {
    secondGreeting.innerText = `${greetingSentence.morning[greetingIndex]}`
  } else if (now >= 12 && now < 18) {
    secondGreeting.innerText = `${greetingSentence.lunch[greetingIndex]}`
  } else {
    secondGreeting.innerText = `${greetingSentence.evening[greetingIndex]}`
  }
}

handleGreeting()