
// let navlinks = $('.navbar-nav .nav-link')

// navlinks.click((ev) => {

//   let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
//   $('#content').load(componentUrl)

// })

let navlinks = document.querySelectorAll(".navbar-nav .nav-link");
console.log(navlinks);
navlinks.forEach(function(currentLink){
  currentLink.addEventListener("click", (event) => {
    console.log(event);
    let componentUrl = `/components/${event.target.dataset.component}.html`;
    console.log(componentUrl);
    loader("#content", componentUrl);
  });
})