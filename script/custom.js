// 주사위 요소를 선택
const dice = document.querySelector('.dice');
// 버튼 요소를 선택
const rollBtn = document.querySelector('.throw');

// 랜덤으로 주사위 숫자를 생성하는 함수
const randomDice = () =>{
    const random = Math.floor(Math.random() * 6) + 1; // 1부터 6까지의 랜덤 숫자 생성

    if(random >= 1 && random <= 6){ // 주사위 숫자가 1~6 사이일 경우
        rollDice(random); // 주사위 굴리기 함수 호출
    }else{
        randomDice(); // 다시 랜덤 숫자 생성
    }
}

// 컨테이너 요소를 선택
const container = document.querySelector('.container');

// 페이지 로드 시 컨테이너에 클래스 추가
window.addEventListener('load', () => {
  container.classList.add('show');
});

// 주사위를 굴리는 함수
const rollDice = random =>{
    dice.style.animation = 'rolling 3s'; // 주사위 애니메이션 시작

    setTimeout(() => { // 애니메이션이 끝난 후 실행
        switch (random){ // 랜덤 숫자에 따라 주사위 회전 설정
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            
            default:
                break;
        }

        dice.style.animation = 'none'; // 애니메이션 초기화

    }, 4050); // 애니메이션 이후 실행
}

// 버튼 클릭 시 랜덤 주사위 함수 호출
rollBtn.addEventListener('click',randomDice);