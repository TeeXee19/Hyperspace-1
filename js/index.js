var itemContainer = document.getElementsByClassName("navbar-nav");

var items = itemContainer.getElementsByClassName("nav-item");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("Click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className +=   " active";
    })
}