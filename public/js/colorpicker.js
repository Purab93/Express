window.onload=function(){
    var allColorSelectors=document.getElementsByClassName('color-selector');
    for(var i=0; i< allColorSelectors.length; i++){ 
        allColorSelectors[i].addEventListener('click', function(event) {
            var currentColor=event.target.getAttribute('data-color');
            document.body.bgColor = currentColor;
        });
    }
};