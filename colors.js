
var llinks = {
  setcolor:function(color){
    // var links = document.querySelectorAll('a');
    // var i = 0;
    // while(i<links.length){
    //   links[i].style.color=color;
    //   i=i+1;
    // }
    $('a').css('color',color);
  }
}

var body = {
  setcolor2:function(color){
  // document.querySelector('body').style.color = color;
  $('body').css('color', color);
},
  setbackcolor:function(color){
    // document.querySelector('body').style.backgroundColor=color;

  $('body').css('backgroundColor', color);
}
}


function ndh(self) {

if(self.value==='night') {
  body.setbackcolor('black');
  body.setcolor2('white');
  self.value='day';

  llinks.setcolor('yellow');

} else {
  body.setbackcolor('white');
  body.setcolor2('black');
  self.value='night';

  llinks.setcolor('blue');
  }
}
