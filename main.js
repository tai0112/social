const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const list = $$('.container-stuff__item')
const listNav = $$('.container-stuff__item--onclick')

const close = $('.container-notify__icon')
const elementClose = $('.container-notify')

// Notify
close.onclick = function(){
    elementClose.classList.add('fade')
    elementClose.classList.add('hide-by-left')
    setTimeout(function(){
        elementClose.classList.add('none')
    },100)
}
// console.log(list)
// console.log(listNav)

// list.forEach(function(value,index){
//     // console.log(value)
//     var i = 0  
//     value.addEventListener('click',function(){
//             i+=2
//             console.log('hihi'+ i)
//             if(i % 2 !==0){
//                 value.onclick=function(){
//                     listNav[index].classList.add('show')
//                     console.log('on' + i)
//                 }
//             }

//             else{
//                 console.log('test' + i)
//                 value.onclick =function(){
//                 listNav[index].classList.remove('show')
//             }
//             }
//         })
        
// })


// List
list.forEach(function(value,index){
    var i = 0   
    value.addEventListener('click',function(){
            i++
            if(i % 2 !==0){
                listNav[index].classList.add('show')
            }
            else{
                listNav[index].classList.remove('show')
            }
        })
        i=0
})

const accept = $('.container-up_coming__click--accept')
const deny = $('.container-up_coming__click--deny')
const mess = $('.container-up_coming--click-message.none')
const allClick = $$('.container-up_coming__click')
const liked = $$('.container-newfeed__submit--like')
const request = $('.container-control--friend')
const bars = $('.bars-mobile')
const navMobile = $('.navbar-mobile')

// bar on mobile

bars.onclick = function(){

}

//Like

liked.forEach(function(value,index){
    value.addEventListener('click',function(){
        if($$('.container-post__desc--like')[index].innerText === 'Like'){
                value.style.backgroundColor = '#2d86ff'
                value.style.color = '#fff'
                $$('.container-post__desc--like')[index].innerText = 'Liked'
        }
        else{
                value.style.backgroundColor = '#607d8b';
                value.style.color = '#fff'
                $$('.container-post__desc--like')[index].innerText = 'Like'
        }

    })


// Friend
accept.onclick = function(){
    allClick.forEach(function(value,index){
        console.log(value)
        value.classList.add('none')
        mess.innerText = 'Accepted'
        mess.classList.remove('none')
        request.style.backgroundColor = 'green'
        request.style.color = '#fff'
        hideFriendRequest()
    })
}

deny.onclick = function(){
    allClick.forEach(function(value,index){
        console.log(mess)
        value.classList.add('none')
        mess.innerText = 'Removed'
        mess.classList.remove('none')
        request.style.backgroundColor = '#eb294d'
        request.style.color = '#fff'
        hideFriendRequest()
    })
}

function hideFriendRequest(){
    if(mess.innerText !== 'NONE'){
        setTimeout(function(){
            request.style.opacity = 0
            setTimeout(function(){
                request.classList.add('none')
            },100)
        },1000)
    }
}



// listNav.forEach(function(value,index){
//     value.onclick = function(){
//         this.classList.remove('show')
//     }
// })





// list.forEach(function(value,index){
//     value.onclick=function(){
//         listNav[index].classList.remove('show')
//     }
// })

// const listNavs = $$('.container-stuff__item--onclick.show')

// listNav.forEach(function(value,index){
//     value.onclick = function(){
//         listNavs[index].classList.remove('show')
//     }
})
