const quotes = [
    {
        quote : "내 아버지는 라디오를 정말 싫어하셨고 텔레비전이 발명되기를 학수고대하셨는데, 텔레비전이 발명되면 이제 텔레비전을 경멸하실 수 있기 때문이었다." ,
        autor : "피터 드 브리스" ,
    },
    {
        quote : "당신은 누구야?라고 그가 물었다. 자신이 경영대학 출신이기 때문이었다." ,
        autor : "조지 에이드" ,
    },
    {
        quote : "인생은 밀림 속의 동물원이다." ,
        autor : "피터 드 브리스" ,
    },
    {
        quote : "창조적 작업은 놀이와 같다. 원하는 형태의 재료를 사용해 자유로운 추측을 하는 것이다." ,
        autor : "스티븐 나흐마노비치" ,
    },
    {
        quote : "분노는 귀담아들을 가치가 있는 신호다." ,
        autor : "해리엇 러너" ,
    },
    {
        quote : "젊은이가 꾸미는 것을 비웃지 말라. 그는 그저 자신의 얼굴을 찾기 위해서 하나 하나 차례로 걸쳐 보고 있는 것이다" ,
        autor : "로건 피어설 스미스" ,
    },
    {
        quote : "아들아, 항상 진실만을 말하거라. 그럼 지난번에 뭐라고 말했는지 기억할 필요가 전혀 없단다." ,
        autor : "샘 레이번" ,
    },
    {
        quote : "이 인생에서는 마지막에 웃는 자가 가장 오래 웃는 자다." ,
        autor : "존 메이스필드" ,
    },
    {
        quote : "내가 정의하기로는 어떤 분야든 전문가라 함은 실제로 두려워 할 만한 어떤 일이 진행되고 있는지를 충분히 알고 있는 사람이다." ,
        autor : "P. J. 플라우거" ,
    },
    {
        quote : "젊은이들에게 관대하라." ,
        autor : "유베날리스" ,
    },
]

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");

const toDayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuotes.quote;
autor.innerText = `-${toDayQuotes.autor}-`;