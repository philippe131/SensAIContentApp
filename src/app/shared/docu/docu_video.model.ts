export class DocuVideo {
    public id: Number;
    public url_photo: String;
    public url_video: String;
    public title: String;
    public text: Array<String>;

    constructor(id, url_photo, url_video, title, text) {
        this.id = id;
        this.url_photo = url_photo;
        this.url_video = url_video;
        this.title = title;
        this.text = text;
    }
}