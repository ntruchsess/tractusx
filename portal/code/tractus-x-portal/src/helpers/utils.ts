// THIS CODE AND INFORMATION IS PROVIDED AS IS WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

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

export function compare(a: any, b: any): number {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;

  }
}
