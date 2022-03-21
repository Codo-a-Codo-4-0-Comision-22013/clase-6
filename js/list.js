export default class List {
    constructor(items) {
        this.items = items;
    }

    render() {
        let html = "<ul>";
        for (let item of this.items) {
            html += `<li>${item}</li>`;
        }
        html += "</ul>";
        return html;
    }
}