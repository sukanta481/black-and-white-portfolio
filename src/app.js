const switchBtn = document.querySelector(".switch");
switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const menuBtn=document.querySelector(".menu");
const navList=document.querySelector(".navList");
menuBtn.addEventListener("click",()=>{
    navList.classList.toggle("show");
    // console.log("clicked");
})