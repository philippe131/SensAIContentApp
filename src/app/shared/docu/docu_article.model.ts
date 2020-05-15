export class DocuArticle {
    public id: number;
    public title: String;
    public sub_title: String;
    public topic: String;
    public date: String;
    public text: Array<String>;
    public picture: Array<String>;
    public source: Array<String>;

    constructor(id, title, sub_title, topic, date, text, picture, source) {
        this.id = id;
        this.title = title;
        this.sub_title = sub_title;
        this.topic = topic;
        this.date = date;
        this.text = text;
        this.picture = picture;
        this.source = source;
    }
}
