const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// // prompt to select media stream, pass to video element, then play
async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    
    videoElement.onloadedmetadata = () =>{
      videoElement.play();
    }
  }
  catch(error){
    console.log(error);
  }
}

// button event
button.addEventListener('click', async () =>{
  // disable Button at first when trigger
  button.disabled = true;

  // start Picture in Picture Method
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
})


// Onloaded
selectMediaStream();