// javascript:var%20count%20=%200;var%20divs%20=%20document.getElementsByTagName(%27div%27);for%20(var%20i%20=%200;%20i%20<%20divs.length;%20i++)%20{if%20(divs[i].className%20===%20%27titleRow%27)%20{count++;}}alert(count);

var count = 0;
var divs = document.getElementsByTagName('div');

for (var i = 0; i < divs.length; i++) {
  if (divs[i].className === 'titleRow') {
    count++;
  }
}

alert(count);

