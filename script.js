// Set props
var minimumRatio = 1.1;
var trackedMilestones = {
  "50": false,
  "100": false,
};
var trackedElements = {
  "header_logo": false
};
var body = document.body,
html = document.documentElement;
var browserheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var documentheight = Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);
var ratio = documentheight/browserheight;

// Only run script if the ratio is above specified minimum value
if(ratio > minimumRatio){
 var startTime = new Date();
 var beginning = startTime.getTime();

   // Ratio classifications
   var ratioClassification = "";
   if(ratio <= 1.25) ratioClassification = "Short scroll page";
   else if(ratio <= 2) ratioClassification = "Medium scroll page";
   else if(ratio > 2) ratioClassification = "Long scroll page";
   console.log("Page is a: "+ratioClassification);

   // Call function on load to see if a page with minor scroll
   calculateScroll();

   // Attach scroll event listener
   if(typeof window.addEventListener === 'function') {
     window.addEventListener("scroll", function(event) {
      calculateScroll();
    }, false)
   } 
   else{
     window.attachEvent("onscroll", function(event) {
      calculateScroll();
    }, false)
   }
 }

 function calculateScroll(){
   // Check if has scrolled to milestone
   for(var mileStone in trackedMilestones){
     if(trackedMilestones[mileStone]==false){
      trackedMilestones[mileStone] = hasScrolledTo(parseInt(mileStone));
      if(trackedMilestones[mileStone]==true){
       var currentTime = new Date();
       var scrollStart = currentTime.getTime();
       var timeToScroll = Math.round((scrollStart - beginning) / 1000);
       console.log("Scrolled to milestone: "+mileStone+"% after "+timeToScroll+" seconds");
     }
   }
 }

 // Check if seen tracked element
 for(var element in trackedElements){
   // Check that element exists on page
   var trackedElement = document.getElementById(element);
   if(trackedElement){
      // Check if visible
      if(trackedElements[element]==false){
        trackedElements[element] = isElementInViewport(trackedElement);
          if (trackedElements[element]==true) {
            var currentTime = new Date();
            var scrollStart = currentTime.getTime();
            var timeToScroll = Math.round((scrollStart - beginning) / 1000);
            console.log("Saw element: "+element+" after "+timeToScroll+" seconds");
          }
        }
      }
    }
  }
  
function hasScrolledTo(milestone){
 if(this.scrollY){
   if((this.scrollY+browserheight)/documentheight*100>=milestone){
    return true;
  }
  else{
    return false;
  }
}
else{
  if((document.documentElement.scrollTop+browserheight)/documentheight*100==milestone){
    return true;
  }
  else{
    return false;
  }
}
}
function isElementInViewport(el) {
var rect = el.getBoundingClientRect();
return rect.bottom > 0 &&
rect.right > 0 &&
rect.left < (window.innerWidth || document. documentElement.clientWidth) &&
rect.top < (window.innerHeight || document. documentElement.clientHeight);
}
