export class DocuTalk {
    public id: Number;
    public url: String;
    public title: String;
    public author: Array<String>;

    constructor(id, url, title, author) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.author = author;
    }
}
