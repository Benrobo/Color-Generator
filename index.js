var lg_1 = document.getElementById("Lg1");
var lg_2 = document.getElementById("Lg2");
var mix = document.getElementById("mix")
var hexoup = document.getElementById("hexoup");
var slid = document.getElementById("opac");
var sliderVal = document.getElementById("opacval");
var btn = document.getElementById("preview");
var oup = document.getElementById("result");
var oup2 = document.getElementById("result2");
var err =document.getElementById("err")
var i;
var lgval = document.getElementById("lgval");

// mix the colors

/*
"linear-gradient(" + currentdir + col1.toHexString() + " " + pow1 + "%, " + col2.toHexString() + " " + pow2 + "%)";

*/

mix.addEventListener("click", function (e) {
    e.preventDefault();

    oup2.style.background = "linear-gradient("+ lg_1.value + "," + (lg_2.value)+")";
    lgval.innerHTML = "linear-gradient("+ lg_1.value + "," + (lg_2.value)+")";

    if (lg_1.value == "" && lg_2.value == "") {
        err.style.display = "block";
        lgval.style.display= "none";
    } else {
      err.style.display = "none";
      lgval.style.display= "block";
    }

    window.setTimeout(func, 3000);
    function func(){
        err.style.display = "none"
    }
});

btn.addEventListener("click", function (e) {
//   oup.style.background = colname.value;
    oup.style.backgroundColor = hexval.value;
    hexoup.innerHTML = "Hex-value : " + hexval.value;

    

    if (hexval.value == "") {
        err.style.display = "block";
    }else{
        err.style.display = "none"
    }
});

slid.addEventListener("change", function (e) {
  e.preventDefault();
  oup.style.opacity = `${slid.value}`;
  sliderVal.innerHTML = slid.value;

  if (slid.value <= 20) {
    oup.style.opacity = "0.2";
  }else if(slid.value <= 50 ) {
    oup.style.opacity = "0.5";
  }
  else if(slid.value = 100){
    oup.style.opacity = "1";
  }
  else if(slid.value == 0){
    oup.style.opacity = "0";
  }
});

