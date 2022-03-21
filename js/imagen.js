export default class Imagen {
    constructor(src) {
        this.src = src;
    }

    render() {
        return `<img src="${this.src}">`;
    }
}