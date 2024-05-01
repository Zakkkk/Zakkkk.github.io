function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        (rect.right-2) <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

// ------- //
// Nav height offset
const navbar = document.querySelector('nav.topnav');
const navbarHeight = navbar.offsetHeight
document.body.style.marginTop = `${navbarHeight}px`

// Nav slider
const sliderDOM = document.querySelector('.topnav-slider')
const allSliderItems = document.querySelectorAll('.topnav-slider-item')
const addSliderItem = name => {
    const newElement = document.createElement('div')
    newElement.classList.add("topnav-slider-item")
    newElement.innerText = name
    sliderDOM.append(newElement)
}

for (let j = 0; j < 5; j++)
    for (let i = 0; i < allSliderItems.length; i++)
        addSliderItem(allSliderItems[i].innerText)

const newSliders = document.querySelectorAll('.topnav-slider-item');
const finalSliderItem = newSliders[newSliders.length-1]

let amount = 0
setInterval(() => {
    amount += .1;
    sliderDOM.scrollLeft = amount

    // Need to detect if we've got to the last child
    if (isElementInViewport(finalSliderItem)) {
        amount = 0
    }
}, 0.5)