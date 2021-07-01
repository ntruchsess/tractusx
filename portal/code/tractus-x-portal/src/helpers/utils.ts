// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. Licensed under MIT licence.
//

export function Random(limit: number): number {
  return Math.floor(Math.random() * limit);
}

export function randomNumber(max: number,min:number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function percentageOf(n: number): number {
  return Math.floor(n*100);
}

export const formatMB = (value: number) => {
  value = value || 0;
  let text;
  if (value >= 1000000000000) {
    text = format(Math.round(value / 10000000000) / 100) + ' TB';
  }
  else if (value >= 1000000000) {
    text = format(Math.round(value / 10000000) / 100) + ' GB';
 }
  else if (value >= 1000000) {
    text = format(Math.round(value / 10000) / 100) + ' MB';
 }
  else if (value >= 1000) {
    text = format(Math.round(value / 10) / 100) + ' KB';
 }
  else {
    text = format(Math.round(value * 100) / 100) + ' bytes';
 }
  return text;
};

export function format(n: number) {
  if (n !== undefined && n !== null) {
    return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  else {
    return '';
  }
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function UUID(): string {
  const nbr = Math.random();
  let randStr = '';
  do {
      randStr += (nbr).toString(16).substr(2);
  } while (randStr.length < 30);

  // tslint:disable-next-line: no-bitwise
  return [randStr.substr(0, 8), '-', randStr.substr(8, 4), '-4', randStr.substr(12, 3), '-', ((nbr * 4 | 0)
    + 8).toString(16), randStr.substr(15, 3), '-', randStr.substr(18, 12)].join('');
}

  // Takes a data URI and returns the Data URI corresponding to the resized image at the wanted size.
  export function resizedataURL(datas: string, wantedWidth: number, wantedHeight: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
  
      // We create an image to receive the Data URI
      const img = document.createElement('img');
  
      // When the event "onload" is triggered we can resize the image.
      // tslint:disable-next-line: only-arrow-functions
      img.onload = function() {
        const aspect = img.width / img.height;
        const wantedAspect = wantedWidth / wantedHeight;
        // We create a canvas and get its context.
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        // We set the dimensions at the wanted size.
        canvas.width = wantedWidth;
        canvas.height = wantedHeight;
  
        if (wantedAspect > aspect) {
          const scale = img.width / wantedWidth;
          const h = wantedHeight * scale;
          const b = (img.height - h) / 2;
          ctx.drawImage(img, 0, b, img.width, h, 0, 0, wantedWidth, wantedHeight);
        } else {
          const scale = img.height / wantedHeight;
          const w = wantedWidth * scale;
          const b = (img.width - w) / 2;
          ctx.drawImage(img, b, 0, w, img.height, 0, 0, wantedWidth, wantedHeight);
        }
  
        const dataURI = canvas.toDataURL();
  
        // This is the return of the Promise
        resolve(dataURI);
      };
  
      img.onerror = function () { reject('Invalid image') };
  
      // We put the Data URI in the image's src attribute
      img.src = datas;
    });
  }
  
export function compare(a: any, b: any): number {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;

  }
}

export function calculateLength(str: String): number {
  return str.length;
}