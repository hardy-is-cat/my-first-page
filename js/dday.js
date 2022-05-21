const ddayForm = document.querySelector("#dday-form")
const ddayInput = document.querySelector(".dday__input")
const ddayBtn = document.querySelector(".dday__submit")
const ddayResult = document.querySelector(".dday__result")

function calculateDday(event) {
  event.preventDefault()
  const today = new Date()
  const targetDay = new Date(ddayInput.value)
  const gap = targetDay.getTime() - today.getTime()
  const leftDays = Math.floor(gap/(1000*60*60*24))
  console.log(leftDays)
  if (leftDays === 0) {
    ddayResult.innerText = `선택하신 날짜
    (${targetDay.getFullYear()}년 ${targetDay.getMonth()+1}월 ${targetDay.getDate()}일)는
    바로 오늘입니다!`
  } else if (leftDays > 0) {
    ddayResult.innerText = `선택하신 날짜
    (${targetDay.getFullYear()}년 ${targetDay.getMonth()+1}월 ${targetDay.getDate()}일)는
    오늘로부터 ${leftDays}일 남았습니다.`
  } else {
    ddayResult.innerText = `선택하신 날짜
    (${targetDay.getFullYear()}년 ${targetDay.getMonth()+1}월 ${targetDay.getDate()}일)는
    오늘로부터 ${Math.abs(leftDays)}일 지났습니다.`
  }
}

ddayForm.addEventListener("submit", calculateDday)