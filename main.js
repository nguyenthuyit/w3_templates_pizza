// menu
function openMenu(evt,nameMenu){
    var i , tablinks, menu
    tablinks = document.getElementsByClassName('tablink')
    menu = document.getElementsByClassName('menu')
    for( i = 0; i < menu.length; i++) {
        menu[i].style.display = 'none'
    }
    for( i=0;i<menu.length;i++){
       tablinks[i].className = tablinks[i].className.replace(' color-red','')
    }
    document.getElementById(nameMenu).style.display = 'block'
    evt.currentTarget.className += ' color-red'
}

//  daytime
const now = new Date()
now.setMinutes(now .getMinutes()- now.getTimezoneOffset())
document.getElementById('dt').value = now.toISOString().slice(0,16)
// openMenu-mobile

    var nav = document.getElementById('nav')
    var iconMobile = document.getElementById('icon-mobile')
    function openNav(){
          nav.style.display ='block'
          iconMobile.style.display = 'none' 
    }
    var navItems = document.querySelectorAll('#nav li a[href *="#"]')
    for (var i = 0; i < navItems.length; i++){
        var navItem = navItems[i]
        navItem.onclick = function(){
            nav.style.display ='none'
          iconMobile.style.display = 'block' 
        }
    }