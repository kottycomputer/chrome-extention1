//広告を消す
document.querySelector(".js-category_hijack").style.display="none"
document.querySelector(".ad_category_hijack_side_asset").style.display="none"
document.querySelector(".box.goiken_box").style.display="none"
document.querySelector(".inq_box").style.display="none"
document.querySelector(".recommend_premium_service").style.display="none"



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


// const elm3 = document.querySelectorAll(".recipe-text");
// for(let i = 0; i < elm3.length; i++){
//   console.log(elm3)
//   elm3.style.cssText = "background-color:#00b7ce; font-size:20px; color:#fff;"
// }




function doSomething(recipe, d){
  var ingredients_amount_list = {};
  var ingredients = d.querySelector("#ingredients");
  var ingredients_list = ingredients.querySelectorAll(".ingredient_row");
  for( var row of ingredients_list ){
    var ingredient_name = row.querySelector(".ingredient_name");
    var ingredient_amount = row.querySelector(".ingredient_quantity.amount");
    if( ingredient_name != null && ingredient_amount != null ) {
      ingredients_amount_list[ingredient_name.textContent] = ingredient_amount.textContent;
    }
  }

  
  for( let n in ingredients_amount_list ) {
    let a = ingredients_amount_list[n];
    console.log("[" + n + "] " + a);
    if(( n == "砂糖" && a.slice(-1) == "g")||( n == "砂糖" && a.slice(-1) == "ｇ"))
    // if( n == "砂糖" && a.slice(-1) == "g")
     {
      let a_gram = parseInt(a.slice(0,-1));
      if( a_gram > 15 ) {
//        recipe_text_tag = recipe.querySelector(".recipe-text");
//        recipe_text_tag.setAttribute("border-width", "10px");
        recipe_img_tag = recipe.querySelector("img");
        recipe_img_tag.classList.add("over15");

        recipe_title_tag = recipe.querySelector(".recipe-title");
        recipe_title_tag.style.color="black"
        recipe_title_tag.style.backgroundColor="red"

        recipe_text_tag = recipe.querySelector(".ingredients");
        recipe_text_tag.textContent="..."
        // recipe_text_tag.style.color="red"
        // recipe_text_tag.style.backgroundColor="red"

        recipe_text2_tag = recipe.querySelector(".recipe_description");
        recipe_text2_tag.textContent="砂糖が15ｇより多いです..."
        recipe_text2_tag.style="font-size:20px"
        recipe_text2_tag.style.fontWeight="bold"
        



        const customBlink = recipe.querySelector(".recipe_description");
         function blink() {
         customBlink.classList.toggle('hidden');    
          }
        setInterval(blink, 500);
      

        recipe_text6_tag = recipe.querySelector(".recipe_author_name");
        recipe_text6_tag.textContent="不健康者"
        
        
//       recipe_text2_tag.style.backgroundColor="red"
       
        
//       const elm3 = document.querySelectorAll(".recipe-title");
//        for(let i = 0; i < elm3.length; i++){
//         elm3[i].style.color="yellow"
//         elm3[i].style.backgroundColor="red"//       } 


        // recipe_title_tag = recipe.querySelector("text");
        // recipe_title_tag.classList.add("over100");

        // recipe_title_tag = recipe.querySelector(".recipe-title");
        // recipe_title_tag.classList.add("wow");


      }
    }
    

    if(( n == "粉砂糖" && a.slice(-1) == "g" ) ||( n == "粉砂糖" && a.slice(-1) == "ｇ")||( n == "粉砂糖" && a.slice(-1) == "㌘")){
      let a_gram = parseInt(a.slice(0,-1));
      if( a_gram > 15 ) {
//        recipe_text_tag = recipe.querySelector(".recipe-text");
//        recipe_text_tag.setAttribute("border-width", "10px");
        recipe_img_tag = recipe.querySelector("img");
        recipe_img_tag.classList.add("over15");
       
        recipe_title_tag = recipe.querySelector(".recipe-title");
        recipe_title_tag.style.color="black"
        recipe_title_tag.style.backgroundColor="red"

        recipe_text13_tag = recipe.querySelector(".recipe_description");
        recipe_text13_tag.textContent="粉砂糖が15ｇより多いです..."
        recipe_text13_tag.style="font-size:20px"
        recipe_text13_tag.style.fontWeight="bold"

        recipe_text14_tag = recipe.querySelector(".recipe_author_name");
        recipe_text14_tag.textContent="不健康者"

        recipe_text15_tag = recipe.querySelector(".ingredients");
        recipe_text15_tag.textContent="..."

        const customBlink = recipe.querySelector(".recipe_description");
        function blink() {
        customBlink.classList.toggle('hidden');    
         }
       setInterval(blink, 500);

      }
    }




    if(( n == "グラニュー糖" && a.slice(-1) == "g" ) ||( n == "グラニュー糖" && a.slice(-1) == "ｇ")||( n == "グラニュー糖" && a.slice(-1) == "㌘")){
      let a_gram = parseInt(a.slice(0,-1));
      if( a_gram > 15 ) {
//        recipe_text_tag = recipe.querySelector(".recipe-text");
//        recipe_text_tag.setAttribute("border-width", "10px");
        recipe_img_tag = recipe.querySelector("img");
        recipe_img_tag.classList.add("over15");
       
        recipe_title_tag = recipe.querySelector(".recipe-title");
        recipe_title_tag.style.color="black"
        recipe_title_tag.style.backgroundColor="red"

        recipe_text3_tag = recipe.querySelector(".recipe_description");
        recipe_text3_tag.textContent="グラニュー糖が15ｇより多いです..."
        recipe_text3_tag.style="font-size:20px"
        recipe_text3_tag.style.fontWeight="bold"

        recipe_text7_tag = recipe.querySelector(".recipe_author_name");
        recipe_text7_tag.textContent="不健康者"

        recipe_text10_tag = recipe.querySelector(".ingredients");
        recipe_text10_tag.textContent="..."

        const customBlink = recipe.querySelector(".recipe_description");
        function blink() {
        customBlink.classList.toggle('hidden');    
         }
       setInterval(blink, 500);

      }
    }

    if(( n == "チョコレート" && a.slice(-1) == "g" )||( n == "チョコレート" && a.slice(-1) == "ｇ")||( n == "チョコレート" && a.slice(-1) == "㌘")) {
      let a_gram = parseInt(a.slice(0,-1));
      if( a_gram > 20 ) {
//        recipe_text_tag = recipe.querySelector(".recipe-text");
//        recipe_text_tag.setAttribute("border-width", "10px");
        recipe_img_tag = recipe.querySelector("img");
        recipe_img_tag.classList.add("over20");
        
        recipe_title_tag = recipe.querySelector(".recipe-title");
        recipe_title_tag.style.color="yellow"
        recipe_title_tag.style.backgroundColor="black"

        recipe_text4_tag = recipe.querySelector(".recipe_description");
        recipe_text4_tag.textContent="チョコレートが20ｇより多いです..."
        recipe_text4_tag.style="font-size:20px"
        recipe_text4_tag.style.fontWeight="bold"

        recipe_text8_tag = recipe.querySelector(".recipe_author_name");
        recipe_text8_tag.textContent="不健康者"

        recipe_text11_tag = recipe.querySelector(".ingredients");
        recipe_text11_tag.textContent="..."

        const customBlink = recipe.querySelector(".recipe_description");
        function blink() {
        customBlink.classList.toggle('hidden');    
         }
       setInterval(blink, 500);
      }
    }

    if( n == "★チョコレート" && a.slice(-1) == "g" ) {
      let a_gram = parseInt(a.slice(0,-1));
      if( a_gram > 20 ) {
//        recipe_text_tag = recipe.querySelector(".recipe-text");
//        recipe_text_tag.setAttribute("border-width", "10px");
        recipe_img_tag = recipe.querySelector("img");
        recipe_img_tag.classList.add("over20");

        recipe_title_tag = recipe.querySelector(".recipe-title");
        recipe_title_tag.style.color="yellow"
        recipe_title_tag.style.backgroundColor="black"

        recipe_text5_tag = recipe.querySelector(".recipe_description");
        recipe_text5_tag.textContent="チョコレートが20ｇより多いです..."
        recipe_text5_tag.style="font-size:20px"
        recipe_text5_tag.style.fontWeight="bold"

        recipe_text9_tag = recipe.querySelector(".recipe_author_name");
        recipe_text9_tag.textContent="不健康者"

        recipe_text12_tag = recipe.querySelector(".ingredients");
        recipe_text12_tag.textContent="..."

        const customBlink = recipe.querySelector(".recipe_description");
        function blink() {
        customBlink.classList.toggle('hidden');    
         }
       setInterval(blink, 500);
      }
    }
  }


  
  f(document.body); // document.body は HTML の文章全体を示す要素  
  



 
  // function f(x){
  //   let cs = x.childNodes;
  //   for(let i = 0; i < cs.length; i++){
  //     let c = cs[i];
  //     if(c.nodeType == Node.TEXT_NODE){
  //       c.textContent = c.textContent.replace(/by/g, "by 不健康な");
  //     }
      
  //   }
  // }



/*
// 書き換えたい対象の要素（ドキュメント全体から探す場合） 
  ingreidents_list = new Array();
  const target = recipe.querySelector(".ingredients"); 
  row_list = target.textContent.split("\n");
  for(let row of row_list ) {
    item_list = row.split("、");
    for( let item of item_list ) {
      ingredients_list.push(item);
    }
  }

  ingredients_amount = new Array();
  const ingredients = d.querySelectorAll(".ingredient_quantity.amount"); // 書き換えに使う情報がある要素
  for(let i = 0; i < ingredients.length; i++){
    ingredients_amount.push(ingredients[i].textContent);
  }

  for( let i = 0 ; i < ingredients_list.length ; i++ ) {
    console.log("[" + ingredients_list[i] + "] " + ingredients_amount[i]);
  }
  // target.textContent += source.textContent;

  */

  
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
