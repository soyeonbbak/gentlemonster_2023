const loginTitleA = document.querySelectorAll('.login_title a')
const loginContents = document.querySelectorAll('.login_contents > div')
console.log(loginTitleA,loginContents)
loginContents[1].style.display ='none'
loginContents[2].style.display ='none'
loginTitleA.forEach(function(target, index, array){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of loginTitleA){i.classList.remove('active')}
        target.classList.add('active')
        console.log(index)
        for(let i of loginContents){i.style.display='none'}
        loginContents[index].style.display = 'block'
    })
    console.log('-------------------------')
})
for(let i of loginContents){i.style.display='none'}
loginContents[0].style.display='flex'
// 2. 각 탭 제목 클릭 시 연관된 내용 보이기 forEach문 구성
loginTitleA.forEach(function(t,index,a){ //< 타이틀(a = 제목태그) 클릭시.
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of loginTitleA){i.classList.remove('active')}
        t.classList.add('active')
        for(let i of loginContents){i.style.display='none'}
        loginContents[index].style.display = 'flex'
        console.log(t,index)
    })
})