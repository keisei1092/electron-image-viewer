// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Mousetrap = require('mousetrap');
const $ = require('jquery');

const body = $('body');
const div = $('div');

changeTransparency = (opacity) => { div.css('opacity', opacity); };

Mousetrap.bind('command+1', () => { changeTransparency(0.1); });
Mousetrap.bind('command+2', () => { changeTransparency(0.2); });
Mousetrap.bind('command+3', () => { changeTransparency(0.3); });
Mousetrap.bind('command+4', () => { changeTransparency(0.4); });
Mousetrap.bind('command+5', () => { changeTransparency(0.5); });
Mousetrap.bind('command+6', () => { changeTransparency(0.6); });
Mousetrap.bind('command+7', () => { changeTransparency(0.7); });
Mousetrap.bind('command+8', () => { changeTransparency(0.8); });
Mousetrap.bind('command+9', () => { changeTransparency(0.9); });
Mousetrap.bind('command+0', () => { changeTransparency(1.0); });
