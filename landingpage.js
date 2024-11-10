const icon = document.querySelector('#nav_ul');
const list = document.querySelector('.baricon')
list.addEventListener("click", () => {
  icon.classList.toggle('active')
});


const readmebabe = document.querySelectorAll('.read_btn');
const para = document.querySelectorAll('.para_wrap');
readmebabe.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    para[index].classList.toggle('open');
  });
});

let inputs = document.getElementsByClassName("inputs"[0]);
let sub = document.getElementById("sub");
sub.addEventListener("click", () => {
  let Name = document.getElementsByClassName("name"[0]).value;
  for (let i = 0; i < inputs.length; i++) {
    console.log(Name.value);
  }

});


let submission = document.getElementById("sub");

submission.addEventListener("click", () => {
  let names = document.getElementsByClassName("name");
  let values = {};
  for (let i = 0; i < names.length; i++) {
    values[names[i].placeholder] = names[i].value;
  }
  console.log(values);
  alert('submitted');
})
const buyBtn = document.querySelectorAll('.buy-now-btn');
buyBtn.forEach((btn) => {
  let isFirstClick = true;
  btn.addEventListener("click", (e) => {
    e.preventDefault(); 0.
    if (isFirstClick) {
      window.location.assign("http://localhost:5500/landingpage.html")
      let isFirstClick = false;
    } else {
      window.location.assign("http://localhost:5500/landingpage.html")

    };
  });
});
