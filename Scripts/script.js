var loadFile = function(event) {
	var image = document.getElementById('result');
	image.src = URL.createObjectURL(event.target.files[0]);
};


function showPost() {
    document.getElementById('showTitle').innerHTML=document.getElementById('add-post').value;
    var preview = document.querySelector('#showImage');
    var file    = document.querySelector('#files').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
    
  }

