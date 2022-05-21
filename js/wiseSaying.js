const wiseSayings = [
  {
    saying: "천재는 노력하기 때문에 어떤 분야에서 뛰어난 것이 아니다. 뛰어나기 때문에 그 분야에서 노력한다.",
    author: "윌리엄 해즐릿"
  },
  {
    saying: "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
    author: "랄프 왈도 에머슨"
  },
  {
    saying: "자신의 부족한 점을 더 많이 부끄러워할 줄 아는 이는 더 존경받을 가치가 있는 사람이다.",
    author: "조지 버나드 쇼"
  },
  {
    saying: "여러분이 할 수 있는 가장 큰 모험은 바로 여러분이 꿈꿔오던 삶을 사는 것입니다.",
    author: "오프라 윈프리"
  },
  {
    saying: "아무런 위험없이 승리하는 것은 영광없는 승리에 다름 아니다.",
    author: "피에르 코르네유"
  },
  {
    saying: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤자민 프랭클린"
  },
  {
    saying: "바쁜 자는 단지 마귀 하나로부터 유혹받지만, 한가로운 자는 수많은 마귀들로부터 유혹당한다.",
    author: "토마스 풀러"
  },
  {
    saying: "우리가 할 수 있는 최선을 다할 때, 우리 혹은 타인의 삶에 어떤 기적이 나타나는지 아무도 모른다.",
    author: "헬렌 켈러"
  },
  {
    saying: "지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.",
    author: "조지 S. 패튼"
  },
  {
    saying: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: "마하트마 간디"
  }
]

const saying = document.querySelector(".saying")
const author = document.querySelector(".author")
const refreshBtn = document.querySelector(".refresh-btn")

function wiseSaying() {
  const index = Math.floor(Math.random()*wiseSayings.length)
  saying.innerText = `${wiseSayings[index].saying}`
  author.innerText = `- ${wiseSayings[index].author} -`
}

wiseSaying()
refreshBtn.addEventListener("click", wiseSaying)