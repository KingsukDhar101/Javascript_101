
function debounce(func, delay){
  let timer;
  return function(...args){
    let context = this;
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      func.call(context, ...args);
    }, delay);
  }
}

function getData(args){
  console.log("api call....", args);
}

let betterFunc = debounce(getData, 300);

let input = document.getElementById('search');

input.addEventListener('input', (e)=>{
  betterFunc();
});

