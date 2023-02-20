//play a audio
/*
let play = document.querySelector(".audio");
play.addEventListener("click", () => {
  const audio = new Audio("audio/file_example_MP3_1MG.mp3");
  audio.play();
});
*/

//Counter check

/*
let count = 0;
let incbtn = document.querySelector(".increment-btn");
let decbtn = document.querySelector(".decrement-btn");
incbtn.addEventListener("click", function () {
  count += 1;
  let counter = document.getElementsByClassName("counter")[0];
  counter.innerHTML = count;
});
decbtn.addEventListener("click", function () {
  if (count > 0) count -= 1;
  else count = 0;
  let counter = document.getElementsByClassName("counter")[0];
  counter.innerHTML = count;
});
*/

const search = document.querySelector(".search-input");
const usersinfo = document.querySelector(".users-info");
const loadingtext = document.getElementsByClassName("loading")[0];
let arr = [];

const getUserData = async () => {
  try {
    let response = await fetch("https://api.github.com/users");
    let jsondata = await response.json();
    if (jsondata) {
      loadingtext.innerText = "";
    }
    jsondata.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = ` <div  class="user-info ">
          <img class="user-img" src="${element.avatar_url}" alt="" />
          <div class="user-details">
            <p class="user-name">${element.login}</p>
           <a href="${element.html_url}" target="_blank"><p>${element.html_url}</p> </a>
          </div>
        </div>`;
      arr.push(li);
      usersinfo.appendChild(li);
    });
  } catch (err) {
    loadingtext.innerHTML = "404 not found";
    console.log(err);
  }
};

getUserData();
search.addEventListener("input", (e) => {
  arr.forEach((data) => {
    if (data.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      data.classList.remove("hide");
    } else {
      data.classList.add("hide");
    }
  });
});
