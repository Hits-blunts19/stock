let navbarDiv = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 500 
    || document.documentElement.scrollTop > 500){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng')
    }
});