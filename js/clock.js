const clock = document.querySelector("#clock")

function getClock() {
  const date = new Date()
  const month = (date.getMonth()) + 1
  const day = date.getDate()
  const week = ["일", "월", "화", "수", "목", "금", "토"]
  const dayOfWeek = week[date.getDay()]
  const hour24 = date.getHours()
  // 12시 표기법
  const hour12 = hour24 > 12 ? hour24 - 12 : hour24
  const getAmPm = hour24 < 12 ? "오전" : "오후"
  const minute = String(date.getMinutes()).padStart(2, "0")
  
  clock.innerText = `${month}월 ${day}일 (${dayOfWeek}) ${getAmPm} ${hour12}:${minute}`
}

getClock()
setInterval(getClock, 1000)