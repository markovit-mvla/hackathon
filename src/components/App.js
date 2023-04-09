import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Voting from './Voting';
class App extends Component {
  onClick() {
    const video = document.querySelector('video');
    const constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
            video.srcObject = stream;
            video.play();
            setTimeout(() => {
              video.pause();
              video.srcObject = null;
            }, 100);
        })
        .catch(err => {
            console.error('Error accessing camera:', err);
        });
        /*
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const scanButton = document.querySelector('#verify-button'); // Need to add scan/verify button
    scanButton.addEventListener('click', () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        /*
        <script onload="onOpenCvReady()"></script>
        function onOpenCvReady() {
            const src = cv.imread(canvas);
            const gray = new cv.Mat();
            let cv = cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
            const imgData = new ImageData(new Uint8ClampedArray(gray.data), gray.cols, gray.rows);
            const pixels = imgData.data;
            // const grayscalePixels = [];

            const grayscalePixel2 = new Array(canvas.height);
            for(let i = 0; i < grayscalePixel2.length; i++) {
              grayscalePixel2[i] = new Array(canvas.width);
            }
            for(let i = 0; i < canvas.height; i++) {
              for(let j = 0; j < canvas.width; i++) {
                let index = 4 *j + canvas.width * i;
                const r = pixels[index];
                const g = pixels[index + 1];
                const b = pixels[index + 2];
                const grayscaleValue = (r + g + b) / 3;
                grayscalePixel2[i][j] = grayscaleValue;
              }
            }


            // for (let i = 0; i < pixels.length; i += 4) {
            //     const r = pixels[i];
            //     const g = pixels[i + 1];
            //     const b = pixels[i + 2];
            //     const grayscaleValue = (r + g + b) / 3;
            //     grayscalePixels.push(grayscaleValue);
            // }
          
        }
    });*/
  }
  
  render() {
    return (
      
      <div>
       
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home  />} />
          </Routes>
         <Routes>
          <Route path="/voting" element={<Voting/>}/>
         </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

/*
This goes between button id and </div>
                  <script>
                  function handleClick() {
                    this.onClick()
                  }
                  document.getElementById("voteBegin").addEventListener("click", handleClick);
                </script>       
*/

export default App;
