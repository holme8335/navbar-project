// https://itnext.io/easy-way-to-organize-your-icons-using-svgs-in-angular-5-f35333d0b442

const fs = require('fs');
const opn = require('opn');
const path = "src\\assets\\Images\\";
const svgDefFilePath = path + 'im-symbol-defs.svg';
const svgStylesFilePath = path + 'im-svg-preview.css';
const svgPreviewHtmlFilePath = path + 'im-svg-preview.html';

const fileHtml = new Promise((resolve, reject) => {

  fs.readFile( svgDefFilePath, 'utf8', function(err, svgDefinitions) {
    if (err) {
      reject(err);
    }
console.log(svgDefFilePath);
    const svgsTransformed = svgDefinitions
      .substring(0, svgDefinitions.lastIndexOf('</defs>'))
      .substring(svgDefinitions.indexOf('<symbol'))
      .trim()
      .replace(/symbol/g, 'use')
      .replace(/id="/g, 'xlink:href="#');
      console.log(svgDefinitions);
    let svgSymbols = svgsTransformed.split('</use>');
    svgSymbols.forEach((symbol, index, symbols) => {
      if (symbol === '') {
        symbols.splice(index, 1);
        return;
      }
      const symbolName = symbol.split('href="')[1].split('"')[0];
      symbols[index] = `<div class="svg-container">
                        <div class="svg-wrap">
                          <svg>${symbol}</use></svg>
                          <span class="svgText">${symbolName}</span>
                      </div> </div>`;
    });
    svgSymbols = svgSymbols.join('');

    const svgData = `${svgDefinitions}${svgSymbols}`;

    resolve(svgData);
  });
});

const fileStyles = new Promise((resolve, reject) => {
  fs.readFile( svgStylesFilePath, 'utf8', function(err, styles) {
    if (err) {
      reject(err);
    }
    resolve(styles);
  });
});

Promise.all([fileStyles, fileHtml]).then(
  ([styles, html]) => {
    const result = `<style>${styles}</style>${html}`;
    fs.writeFile( svgPreviewHtmlFilePath, result, 'utf8', function(err) {
      if (err) return console.log(err);

      console.log('\x1b[42m\x1b[37m%s\x1b[0m', 'Successfully generated svg preview file. This file would be automatically opened in your default browser');

      opn(svgPreviewHtmlFilePath);
    });
  },
  error => {
    console.log(error);
  }
);
