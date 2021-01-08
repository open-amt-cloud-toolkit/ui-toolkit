// /**
//  * @jest-environment jsdom
//  */

// /*********************************************************************
// * Copyright (c) Intel Corporation 2019
// * SPDX-License-Identifier: Apache-2.0
// **********************************************************************/

// import { ImageHelper } from "../core/Utilities/ImageHelper";
// const { createCanvas, loadImage, ImageData } = require('canvas');
// import { string } from 'prop-types';

// // classes defined for Unit testing
// import { AmtDesktop } from '../test/helper/testdesktop';
// import { TestLogger } from '../test/helper/testlogger';
// import { RleVariables } from '../test/helper/rledecodervariables'

// describe("Test ImageHelper", () => {

//     it('Test arotX function in ImageHelper with parent.rotation == 0', () => {  
//       // Set Input
//       let parent = new AmtDesktop();
//       let x = 100;
//       let y = 120;
//       parent.rotation = 0;

//       // test arotX function
//       let ret = ImageHelper.arotX(parent, x, y);

//       // Output
//       expect(ret).toBe(x);
//     });

//     it('Test arotX function in ImageHelper with parent.rotation == 3', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 3;
  
//         // test arotX function
//         let ret = ImageHelper.arotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(y);
//     });

//     it('Test arotX function in ImageHelper with parent.rotation == 1', () => {  
//       // Set Input
//       let parent = new AmtDesktop();
//       let x = 100;
//       let y = 120;
//       parent.rotation = 1;
//       parent.canvasCtx.canvas.width = 140;
//       parent.sparew2 = 10;

//       // test arotX function
//       let ret = ImageHelper.arotX(parent, x, y);

//       // Output
//       expect(ret).toBe(10);
//     });

//     it('Test arotX function in ImageHelper with parent.rotation == 2', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 2;
//         parent.canvasCtx.canvas.width = 150;
//         parent.sparew2 = 20;
  
//         // test arotX function
//         let ret = ImageHelper.arotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(30);
//     });

//     it('Test arotY function in ImageHelper with parent.rotation == 0', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 0;
  
//         // test arotY function
//         let ret = ImageHelper.arotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(y);
//     });

//     it('Test arotY function in ImageHelper with parent.rotation == 1', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 1;
  
//         // test arotY function
//         let ret = ImageHelper.arotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(x);
//     });

//     it('Test arotY function in ImageHelper with parent.rotation == 2', () => {  
//       // Set Input
//       let parent = new AmtDesktop();
//       let x = 100;
//       let y = 105;
//       parent.rotation = 2;
//       parent.canvasCtx.canvas.height = 140;
//       parent.spareh2 = 10;

//       // test arotY function
//       let ret = ImageHelper.arotY(parent, x, y);

//       // Output
//       expect(ret).toBe(25);
//     });

//     it('Test arotY function in ImageHelper with parent.rotation == 3', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 3;
//         parent.canvasCtx.canvas.height = 150;
//         parent.spareh = 20;
  
//         // test arotY function
//         let ret = ImageHelper.arotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(30);
//     });

//     it('Test crotX function in ImageHelper with parent.rotation == 0', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 0;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotX function
//         let ret = ImageHelper.crotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(x);
//     });

//     it('Test crotX function in ImageHelper with parent.rotation == 1', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 1;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotX function
//         let ret = ImageHelper.crotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(y);
//     });

//     it('Test crotX function in ImageHelper with parent.rotation == 2', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 2;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotX function
//         let ret = ImageHelper.crotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(60);
//     });

//     it('Test crotX function in ImageHelper with parent.rotation == 3', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 3;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotX function
//         let ret = ImageHelper.crotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(30);
//     });


//     it('Test crotY function in ImageHelper with parent.rotation == 0', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 120;
//         let y = 110;
//         parent.rotation = 0;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotY function
//         let ret = ImageHelper.crotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(y);
//     });

//     it('Test crotY function in ImageHelper with parent.rotation == 3', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 120;
//         let y = 110;
//         parent.rotation = 3;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotY function
//         let ret = ImageHelper.crotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(x);
//     });

//     it('Test crotY function in ImageHelper with parent.rotation == 1', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 120;
//         let y = 110;
//         parent.rotation = 1;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotY function
//         let ret = ImageHelper.crotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(40);
//     });

//     it('Test crotY function in ImageHelper with parent.rotation == 2', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 120;
//         let y = 110;
//         parent.rotation = 2;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test crotY function
//         let ret = ImageHelper.crotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(40);
//     });

//     it('Test rotX function in ImageHelper with parent.rotation == 0', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 0;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test rotX function
//         let ret = ImageHelper.rotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(x);
//     });

//     it('Test rotX function in ImageHelper with parent.rotation == 1', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 1;
//         parent.canvasCtx.canvas.width = 80;
//         parent.canvasCtx.canvas.height = 90;
  
//         // test rotX function
//         let ret = ImageHelper.rotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(x);
//     });

//     it('Test rotX function in ImageHelper with parent.rotation == 2', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 2;
//         parent.canvasCtx.canvas.width = 80;
//         parent.canvasCtx.canvas.height = 90;
  
//         // test rotX function
//         let ret = ImageHelper.rotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(20);
//     });

//     it('Test rotX function in ImageHelper with parent.rotation == 3', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 3;
//         parent.canvasCtx.canvas.width = 80;
//         parent.canvasCtx.canvas.height = 90;
  
//         // test rotX function
//         let ret = ImageHelper.rotX(parent, x, y);
  
//         // Output
//         expect(ret).toBe(10);
//     });

//     it('Test rotY function in ImageHelper with parent.rotation == 0', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 0;
//         parent.canvasCtx.canvas.width = 160;
//         parent.canvasCtx.canvas.height = 150;
  
//         // test rotY function
//         let ret = ImageHelper.rotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(y);
//     });

//     it('Test rotY function in ImageHelper with parent.rotation == 1', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 1;
//         parent.canvasCtx.canvas.width = 80;
//         parent.canvasCtx.canvas.height = 90;
  
//         // test rotY function
//         let ret = ImageHelper.rotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(40);
//     });

//     it('Test rotY function in ImageHelper with parent.rotation == 2', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 2;
//         parent.canvasCtx.canvas.width = 80;
//         parent.canvasCtx.canvas.height = 90;
  
//         // test rotY function
//         let ret = ImageHelper.rotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(30);
//     });

//     it('Test rotY function in ImageHelper with parent.rotation == 3', () => {  
//         // Set Input
//         let parent = new AmtDesktop();
//         let x = 100;
//         let y = 120;
//         parent.rotation = 3;
//         parent.canvasCtx.canvas.width = 80;
//         parent.canvasCtx.canvas.height = 90;
  
//         // test rotY function
//         let ret = ImageHelper.rotY(parent, x, y);
  
//         // Output
//         expect(ret).toBe(y);
//     });

//     it('Test fixColor function', () => {  
//         // test fixColor function
//         let ret = ImageHelper.fixColor(128);
  
//         // Output
//         expect(ret).toBe(160);
//     });

//     it('Test fixColor function', () => {  
//         // test fixColor function
//         let ret = ImageHelper.fixColor(127);
  
//         // Output
//         expect(ret).toBe(ret);
//     });

//     it('Test fixColor function', () => {  
//         // test fixColor function
//         let ret = ImageHelper.fixColor(126);
  
//         // Output
//         expect(ret).toBe(ret);
//     });

//     it('Test putImage function', () => {  
//         // Create Objects
//         let parent = new AmtDesktop();

//         // Test input
//         let strarray = RleVariables.inputtoDecode1.split(',');
        
//         // Input parameters
//         let x = 0;
//         let y = 0;
//         let width = 64;
//         let height = 64;

//         // Create canvas and populate image data
//         const canvas = createCanvas(200, 200);
//         parent.canvasCtx = canvas.getContext("2d");
//         parent.spare = new ImageData(RleVariables.spare1, height, width);

//         // test putImage function
//         let ret = ImageHelper.putImage(parent, x, y);
          
//         // get Image data - Get the image on canvas and compare with the drawn image
//         let output = parent.canvasCtx.getImageData(x, y, width, height);
//         expect(output).toEqual(parent.spare);
//     });

//     it('Test setPixel function with parent.rotation = 0', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let width = 64;
//         let height = 64;
//         let ptr = 0;
//         let value = 207;
//         parent.spare = new ImageData(RleVariables.spare1, height, width);
//         parent.rotation = 0;
//         parent.bpp = 1;

//         // test setPixel function
//         let ret = ImageHelper.setPixel(parent, value, ptr);
          
//         // Output
//         expect(parent.spare.data[0]).toBe(192);
//         expect(parent.spare.data[1]).toBe(96);
//         expect(parent.spare.data[2]).toBe(224);
//         expect(parent.spare.data[3]).toBe(0XFF);
//     });

//     it('Test setPixel function with parent.rotation = 1', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let width = 64;
//         let height = 64;
//         let ptr = 19;
//         let value = 207;
//         parent.spare = new ImageData(RleVariables.spare1, height, width);
//         parent.rotation = 1;
//         parent.bpp = 1;
//         parent.sparew = 4;
//         parent.sparew2 = 10;

//         // test setPixel function
//         let ret = ImageHelper.setPixel(parent, value, ptr);
          
//         // Output
//         expect(parent.spare.data[140]).toBe(192);
//         expect(parent.spare.data[141]).toBe(96);
//         expect(parent.spare.data[142]).toBe(224);
//         expect(parent.spare.data[143]).toBe(0XFF);
//     });

//     it('Test setPixel function with parent.rotation = 2', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let width = 64;
//         let height = 64;
//         let ptr = 19;
//         let value = 207;
//         parent.spare = new ImageData(RleVariables.spare1, height, width);
//         parent.rotation = 2;
//         parent.bpp = 1;
//         parent.sparew = 4;
//         parent.spareh = 20;

//         // test setPixel function
//         let ret = ImageHelper.setPixel(parent, value, ptr);
          
//         // Output
//         expect(parent.spare.data[240]).toBe(192);
//         expect(parent.spare.data[241]).toBe(96);
//         expect(parent.spare.data[242]).toBe(224);
//         expect(parent.spare.data[243]).toBe(0XFF);
//     });

//     it('Test setPixel function with parent.rotation = 3', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let width = 64;
//         let height = 64;
//         let ptr = 19;
//         let value = 9999;
//         parent.spare = new ImageData(RleVariables.spare1, height, width);
//         parent.rotation = 3;
//         parent.bpp = 0;
//         parent.sparew = 4;
//         parent.sparew2 = 10;

//         // test setPixel function
//         let ret = ImageHelper.setPixel(parent, value, ptr);
          
//         // Output
//         expect(parent.spare.data[256]).toBe(32);
//         expect(parent.spare.data[257]).toBe(224);
//         expect(parent.spare.data[258]).toBe(120);
//         expect(parent.spare.data[259]).toBe(0XFF);
//     });


//     it('Test setRotation function with parent.holding == true', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let x = 15;
//         parent.holding = true;

//         // test setRotation function
//         let ret = ImageHelper.setRotation(parent, x);
          
//         // Output
//         expect(parent.rotation).toBe(3);
//     });

//     it('Test setRotation function with parent.holding == true and x < 0', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let x = -3;
//         parent.holding = true;

//         // test setRotation function
//         let ret = ImageHelper.setRotation(parent, x);
          
//         // Output
//         expect(parent.rotation).toBe(1);
//     });

//     it('Test setRotation function with newrotation == parent.rotation', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let x = 15;
//         parent.holding = false;
//         parent.rotation = 3;

//         // test setRotation function
//         let ret = ImageHelper.setRotation(parent, x);
          
//         // Output
//         expect(ret).toBe(true);
//     });

//     it('Test setRotation function with newrotation == parent.rotation', () => {  
//         // Create Object
//         let parent = new AmtDesktop();

//         // Test input
//         let x = 15;
//         parent.holding = false;
//         parent.rotation = 3;

//         // test setRotation function
//         let ret = ImageHelper.setRotation(parent, x);
          
//         // Output
//         expect(ret).toBe(true);
//     });
// });

