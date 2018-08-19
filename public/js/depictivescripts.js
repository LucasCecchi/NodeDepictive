
function updateSliderVal(current) {
        var a = document.getElementById("currentNodeVal");
        a.innerHTML = current;
    }

function renderNetwork(){
  var nums = parseInt(document.getElementById("currentNodeVal").innerHTML);
  var i = document.getElementById("loader");
  var pars = document.getElementById("thispars");
  clearBox("loader");


  for(n=0;n<nums;n++){
    var inpt = document.createElement("input");
    inpt.type='range';inpt.value='0';inpt.min='0';inpt.max='2';inpt.step='.1';inpt.name="nSlider"+n.toString();
    inpt.id="nSlider"+n.toString();
    inpt.form='loader';
    inpt.onchange= function(){$("#nVal"+ this.id.substr(7)).html(this.value);};
    var outpt = document.createElement("span");outpt.innerHTML="0";outpt.id="nVal"+n.toString();
    $(i).append("<span>0</span>");
    $(i).append(inpt);
    $(i).append("<span>2</span>");
    $(i).append("<br>");
    $(i).append(outpt);
    $(i).append("<hr>");
  }
  $(pars).append("<button id='submitbutton' onclick='submitNetworkData()'>Submit</button>");
}



function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
    $("#submitbutton").remove();
}
