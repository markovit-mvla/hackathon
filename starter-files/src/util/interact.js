//export const helloWorldContract;

export const loadCurrentMessage = async () => { 
  
};

export const connectWallet = async () => {
  
};

export const validateVoter = async () => {
    const video = document.querySelector('video');
    const constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error('Error accessing camera:', err);
        });
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const scanButton = document.querySelector('#verify-button'); // Need to add scan/verify button
    scanButton.addEventListener('click', () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        /* Process image */
    });
}   

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
