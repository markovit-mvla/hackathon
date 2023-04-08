require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x6f3f635A9762B47954229Ea479b4541eAF402A6A";

export const helloWorldContract = new web3.eth.Contact(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => { 
  const message = await helloWorldContract.methods.message().call();
  return message;
};

export const connectToEthChain = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            const obj = {
              status: "👆🏽 Write a message in the text-field above.",
              address: addressArray[0],
            };
            return obj;
          } catch (err) {
            return {
              address: "",
              status: err.message,
            };
          }
        } else {
          return {
            address: "",
            status: "",
        }
    }
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
        <script async src="https://docs.opencv.org/master/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>
        function onOpenCvReady() {
            const src = cv.imread(canvas);
            const gray = new cv.Mat();
            cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
            const imgData = new ImageData(new Uint8ClampedArray(gray.data), gray.cols, gray.rows);
            const pixels = imgData.data;
            const grayscalePixels = [];
            for (let i = 0; i < pixels.length; i += 4) {
                const r = pixels[i];
                const g = pixels[i + 1];
                const b = pixels[i + 2];
                const grayscaleValue = (r + g + b) / 3;
                grayscalePixels.push(grayscaleValue);
            }
        }
    });
};

export const getCurrentVoterConnected = async () => {
    if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (addressArray.length > 0) {
            return {
              address: addressArray[0],
              status: "👆🏽 Write a message in the text-field above.",
            };
          } else {
            return {
              address: "",
              status: "",
            };
          }
        } catch (err) {
          return {
            address: "",
            status: err.message,
          };
        }
      } else {
        return {
          address: "",
          status: "",
        }
      }
};

export const updateMessage = async (address, message) => {
  
};