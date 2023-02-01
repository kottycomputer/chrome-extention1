//let calendars = document.querySelectorAll(".list-rst__calendar-frame");
//for(let i = 0; i < calendars.length; i++){
  //let e = calendars[i];
  //e.style.display = 'none';
//}






function getDocument(t){
  return new DOMParser().parseFromString(t, "text/html");
}

const recipes = document.querySelectorAll(".recipe-preview");

for(let i = 0; i < recipes.length; i++){
  const recipe = recipes[i];
  if(recipe.querySelector(".dots")){
    const url = recipe.querySelector("a.recipe-title").getAttribute("href");
       fetch(url)
      .then(r => r.text())
      .then(t => getDocument(t))
      .then(d => doSomething(recipe, d))
  }
}

function doSomething(recipe, d){

// 書き換えたい対象の要素（ドキュメント全体から探す場合） 
  const target = recipe.querySelector(".ingredients"); 
  console.log(target.textContent);
  const ingredients = d.querySelectorAll(".ingredient_quantity.amount"); // 書き換えに使う情報がある要素
  for(let i = 0; i < ingredients.length; i++){
  const source = ingredients[i]
  console.log(source.textContent);  
  target.textContent += source.textContent;
  }
}


//砂糖と砂糖のｇ数を対応させたい
let "砂糖”= x
if(textContent = "砂糖"){ }
if (x>=80) {
    console.log("numは80より大きいです。");
  } 
else {
    console.log("numは80未満です。");
}







// function f(n){
//   let cs = n.childNodes;
//   for(let i = 0; i < cs.length; i++){
//     let c = cs[i];
//     if(c.nodeType == Node.TEXT_NODE){
//       c.textContent = c.textContent.replace(/旨/g, "まず");
//       c.textContent = c.textContent.replace(/美味し/g, "まず");
//       c.textContent = c.textContent.replace(/食べた/g, "食べたくな");
//       c.textContent = c.textContent.replace(/柔らか/g, "硬");
//       c.textContent = c.textContent.replace(/安/g, "高");
//       c.textContent = c.textContent.replace(/取れたて/g, "取って10日");
//     }
//     else{
//       f(c);
//     }
//   }
// }


// let tpointsbox = document.querySelectorAll(".list-rst__tpoint");
// for(let i = 0; i < tpointsbox.length; i++){
//   let e = tpointsbox[i];
//   e.style.display = 'none';
// }


f(document.body); // document.body は HTML の文章全体を示す要素

