// GO!

// TASK 1 -- Show/Hide Nav

var navButton = document.querySelector('#hide-nav button')
var navMenu = document.querySelector('.answer-box .nav-menu')

var hideMenu = function(){

   if (navMenu.className === 'nav-menu-hidden'){
         navMenu.className = 'nav-menu'
      } else {
         navMenu.className = 'nav-menu-hidden'
      }
   }
navButton.addEventListener('click', hideMenu)

// TASK 2 -- Select an Icon
var wishListSelector = document.querySelector('.wish-list')

//console.log([wishListSelector])

var hiLighter = function(evt){
   if (evt.target.className === "option"){
      evt.target.className = "option selected"
   } else if (evt.target.className === "option selected") {
      evt.target.className = "option"
   }
}

wishListSelector.addEventListener('click', hiLighter)
//THIS ONE IS ACTING REALLY WEIRD BUT IT WORKS


// TASK 3 -- Move Item From List to List
var goodPeeps = document.querySelector('.good-standing-list')
var badPeeps = document.querySelector('.probation-list')
var liSelector = document.querySelectorAll('.standing-list li')

var listChanger = function(evt){
   var parentList = evt.target.parentNode.className

   if (parentList === "good-standing-list standing-list"){
      badPeeps.appendChild(evt.target)

   } else {
      goodPeeps.appendChild(evt.target)

      }
   }

   for(var i = 0; i < liSelector.length; i++){
      liSelector[i].addEventListener('click', listChanger)
   }



// TASK 4 -- Add Guest to List
var inputSelector = document.querySelector('input')
var guestList = document.querySelector('.guest-list')
var transferNames = function(evt){



   if(evt.keyCode == 13){
      var createLi = document.createElement('li')
      //console.log(inpSelector.value)

      createLi.textContent = inputSelector.value

      guestList.appendChild(createLi)
      createLi.className = "guest"
      inputSelector.value = ''


   }

}

inputSelector.addEventListener('keydown', transferNames)


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
