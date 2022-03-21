export default class Sound {
    constructor(src) {
        this.src = src;
    }

    render() {
        return `<audio controls><source src="${this.src}" type="audio/ogg"></source></audio>`;
    }
}