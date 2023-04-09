import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  onClick() {
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
          
        }*/
    });
  }
  
  render() {
    return (
      
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" style={{ width: '50%', height: '50%' }} />
                </a>
                <h1>Los Altos Hacks Blockchain Ballots</h1>
                <p class = "">
                  Revolutionize voting.
                </p>
                <button id = "beg">Begin the voting process</button>
              </div>
            </main>
          </div>
        </div>
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
