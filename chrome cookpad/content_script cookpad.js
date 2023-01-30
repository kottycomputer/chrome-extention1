let calendars = document.querySelectorAll(".list-rst__calendar-frame");
for(let i = 0; i < calendars.length; i++){
  let e = calendars[i];
  e.style.display = 'none';
}

function f(n){
  let cs = n.childNodes;
  for(let i = 0; i < cs.length; i++){
    let c = cs[i];
    if(c.nodeType == Node.TEXT_NODE){
      c.textContent = c.textContent.replace(/旨/g, "まず");
      c.textContent = c.textContent.replace(/美味し/g, "まず");
      c.textContent = c.textContent.replace(/食べた/g, "食べたくな");
      c.textContent = c.textContent.replace(/柔らか/g, "硬");
      c.textContent = c.textContent.replace(/安/g, "高");
      c.textContent = c.textContent.replace(/取れたて/g, "取って10日");
    }
    else{
      f(c);
    }
  }
}

let tpoints = document.querySelectorAll(".list-rst__tpoint-info");
for(let i = 0; i < tpoints.length; i++){
  let e = tpoints[i];
  e.style.display = 'none';
}

let tpointsbox = document.querySelectorAll(".list-rst__tpoint");
for(let i = 0; i < tpointsbox.length; i++){
  let e = tpointsbox[i];
  e.style.display = 'none';
}


f(document.body); // document.body は HTML の文章全体を示す要素

