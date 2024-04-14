const bmk =document.querySelector('.bmk');
const first_button = document.querySelector('.first-button');
const got_btn = document.querySelector('.got-btn');
const hamburger = document.querySelector('.hamburger');

first_button.onclick =()=>{
    bmk.textContent = 'Bookmarked';

}

const reward = document.querySelector('.reward');
const modal_success = document.querySelector('.modal-success');

reward.onclick =()=>{
    modal_success.style.display = 'flex';
}

got_btn.onclick =()=>{
    modal_success.style.display = 'none';
}

// got_btn.addEventListener('click', ()=>{
//     modal_success.style.display ='none';
// })

