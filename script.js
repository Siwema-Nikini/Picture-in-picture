const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaSrteam(){
    try {
        const MediaSrteam = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = MediaSrteam;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error){
        consol.log('whoops, error here', error)

    }

}

button.addEventListener('click', async() =>{
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;

});

selectMediaSrteam();