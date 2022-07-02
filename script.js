function capturaVideo(){
  const specs = {
    video:
      {
        width:600, height:300, aspectRatio:16/9
        }
  }
  
  navigator.mediaDevices.getUserMedia(specs).then(stream=>
    {
      const videoElement = document.querySelector("#camera")
      videoElement.style.marginTop = "3em";
      videoElement.srcObject = stream;
    
  }).catch(error=>{console.log(error)})
  
}

window.addEventListener("DOMContentLoaded", capturaVideo)
let corpo = document.querySelector('body').style;
corpo.textAlign = "center";
corpo.backgroundColor = "#000";