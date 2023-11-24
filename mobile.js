const menuToggle = document.getElementById("toggleButton");
const mobile = document.getElementById("mobilee");
menuToggle.addEventListener('click', function () {
    if (mobile.style.display == 'none') {
        mobile.style.display = ''
        mobile.style.transform = 'translateX(0)';
    }else{
        mobile.style.transform = 'translateX(100%)';
        mobile.style.display = 'none'
    }
})

window.addEventListener('resize', function (event) {
    if (this.window.innerWidth > 899) {
        mobile.style.display = 'none'
    }
})