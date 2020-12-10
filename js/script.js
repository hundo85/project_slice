function _load(){

/* ToDo webes felulet:
10 soros legyen,
soronként checkbox + szöveges menu + törlés gomb,
bővíthető legyen egy hozzáadás gombbal.

  0.  egy változóba eltároljuk a root elemet
  1.  egy változóba mentsük el a 10es számot
  2.  insertAdjestenHTML-el delete class gombok létrehozása
  3.  insertAdjestenHTML-el add gomb hozzáadása a root elemen kívülre (afterend pozícióba)
  4.  egy add gomb létrrehozása ID-val, click eseménnyel majd létre kell hozni egy click esemény figyelőt
      ami majd függvény segítségével hozzáad egy új elemet a ToDo listához 
  5.  jelöljük ki az összes törlés gombot (querrySelectorAll) majd for ciklussal végiglépkedünk rajtuk és 
      mindegyikre rakjunk rá egy click eseményt minden sorba a törlés gombokra
  6.  törlés függvény, a törlés gomb sorát törölje ki

*/
  let row = `
  <div class="rows">
    <input type="checkbox">
    <input type="text">
    <button type="button" class="delete">Delete</button>
  </div>
  `;
  let rootElement = document.getElementById("root");
  let times = 10;

  //Delete gombok
  for(let i=0; i<times; i++){
    rootElement.insertAdjacentHTML("beforeend", row);
  }
  
  //3.  insertAdjestenHTML-el add gomb hozzáadása a root elemen kívülre (afterend pozícióba)
  rootElement.insertAdjacentHTML("afterend", `
    <button type="button" id="add">Add row</button>
  `);
 
  //4.  egy add gomb létrrehozása ID-val, click eseménnyel majd létre kell hozni egy click esemény figyelőt
  //    ami majd függvény segítségével hozzáad egy új elemet a ToDo listához
  
  function addItem(){
    rootElement.insertAdjacentHTML("beforeend", row);
    //TODO: az új elemre is rákell tenni a törlés függvényt 
  }
  document.getElementById("add").addEventListener("click", addItem);

  //5.  jelöljük ki az összes törlés gombot (querrySelectorAll) majd for ciklussal végiglépkedünk rajtuk és 
  //    mindegyikre rakjunk rá egy click eseményt minden sorba a törlés gombokra
  let delButtons = rootElement.querySelectorAll(".delete"); 

  function delItem(e){
    e.target.parentElement.remove();
  }
  for(let i=0; i<delButtons.length; i++){
    delButtons[i].addEventListener("click",delItem);
  }
}

window.addEventListener("load", _load);