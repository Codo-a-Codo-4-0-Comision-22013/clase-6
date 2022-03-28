import render, { render2 } from './render_functions.js';

export default class Button {
    constructor(text) {
        this.text = text;
    }

    /*render() {
        return `<button>${this.text}</button>`;
    }*/
}


Button.prototype.render = render2;