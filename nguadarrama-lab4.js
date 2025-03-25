// N Guadarrama
// ITMD 441-02 Undergraduate Student  

//Requirement 1 - In the hero change the main headline to the following text (do not include the wrapping
// quotes):
// “Uplift Your Brand with Stellar Marketing”
(function(){
    document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
})();

//Requirement 2 - Change the line of text below the hero headline to the following text (do not include the
// wrapping quotes, notice the bold and italic):
// “Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.”
(function(){
    document.querySelector('#hero p').textContent = "Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.";
})();

//Requirement 3 - Change the image in the background of the hero to the one below:
https://picsum.photos/id/683/1280/720
(function() {
    const bgImage = document.querySelector('#hero');
    if (bgImage) {
        bgImage.style.backgroundImage = 'url("https://picsum.photos/id/683/1280/720")';
    }
})();

//Requirement 4 - Change the background color of the nav bar to the same color that is used in the footer.
(function() {
    document.querySelector('.bg-blue-600.text-white.p-4').style.backgroundColor = 'rgb(31 41 55 / var(--tw-bg-opacity, 1)';
})();

//Requirement 5 - Remove the “Get Started” CTA from the hero.
(function() {
    element = document.querySelector('#hero a'); 
    element.remove();
})();

//Requirement 6 - Center Align the heading for sections - 
// a. Services
// b. Solutions
// c. Contact
(function(){
    document.querySelector('#services h2').style.textAlign = 'center';
    document.querySelector('#solutions h2').style.textAlign = 'center';
    document.querySelector('#contact h2').style.textAlign = 'center';
})();

//Requirement 7 - In the services section change the icons color to (#47C714).
(function() {
    document.querySelector('span[data-icon="digital"]').style.color = '#47C714';
    document.querySelector('span[data-icon="brand"]').style.color = '#47C714';
    document.querySelector('span[data-icon="social"]').style.color = '#47C714';
})();

//Requirement 8 - The icons use the material symbols outlined library. Change the digital marketing icon to use
// ‘Ads Click’ instead of the current icon.
(function() {
   element = document.querySelector('span[data-icon="digital"]');
   element.textContent = 'ads_click';
})();

//Requirement 9 - In the specialized marketing solutions section make a change to the layout of the tiles so that
// at >= 1024px they are 4 across instead of 2 across.
(function() {
    element = document.querySelector('div[data-section="product_cards"]');
    
    if (window.innerWidth >= 1024) {
        element.style.gridTemplateColumns = 'repeat(4, minmax(0, 1fr))';
    }
 })();

//Requirement 10 - In the same section change the Musicians image to the following:
https://picsum.photos/id/453/400/300
(function() {
    const image = document.querySelector('img[alt="Musicians"]');
    if (image) {
        image.src = 'https://picsum.photos/id/453/400/300';
    }
})();