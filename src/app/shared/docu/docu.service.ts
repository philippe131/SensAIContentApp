import { Injectable } from "@angular/core";
import { DocuArticle } from './docu_article.model';
import { DocuVideo } from './docu_video.model'
import { firebase } from "../../app.component";
import { DocuTalk } from "./docu_talk.model";
import { DocuQuote } from "./docu_quote.model";

@Injectable({
    providedIn: "root"
})
export class DocuService {

    private list_videos = new Array<DocuVideo>();
    private list_articles = new Array<DocuArticle>();
    private list_talks = new Array<DocuTalk>();
    private list_quotes = new Array<DocuQuote>();
    private talk_visible : boolean = false;

    // To fill list_video
    fill_Videos(firestore): void {

        let compteur = 0;
        let self = this;

        //get all the doc in the collection media/articles/article & put url in list_articles
        firestore.collection("media/videos/external_video").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {

                //create object Video with all the fiels in the database + fill the list
                let video_elem = new DocuVideo(doc.data().id, doc.data().url_photo, doc.data().url_video, doc.data().title, doc.data().text);
                self.list_videos[compteur] = video_elem;
                compteur++;
                });

            //sort the list by id
            self.list_videos.sort(self.compareSortById);
        });
    }
    
    // To fill list_article
    fill_Articles(firestore): void {
    
        //self because 'this' is invisible in anonymous function
        let compteur = 0;
        let self = this;
    
        //get all the doc in the collection media/articles/article & put url in list_articles
        firestore.collection("media/articles/article").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                //create object Article with all the field in the database + fill the list
                let article_elem = new DocuArticle(doc.data().id, doc.data().title, doc.data().sub_title, doc.data().topic, doc.data().date, doc.data().text, doc.data().picture, doc.data().source);
                self.list_articles[compteur] = article_elem;
                compteur++;
            });
            //sort the list by id
            self.list_articles.sort(self.compareSortById);
        });
    }
    
    // To fill list_talk
    fill_Talks(firestore): void {
    
        //self because 'this' is invisible in anonymous function
        let compteur = 0;
        let self = this;

        //get all the doc in the collection media/talks/talk & put url in list_talks
        firestore.collection("media/talkshow/talks").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {

                // create object Video with the field in the db
                let talk_elem = new DocuTalk(doc.data().id, doc.data().url, doc.data().title, doc.data().author);
                self.list_talks[compteur] = talk_elem;
                compteur++;
            });
            //sort the list by id
            self.list_talks.sort(self.compareSortById);
        });
    }

    // To fill the list off quotes
    fill_quotes(firestore): void {

        let self = this;
        let compteur = 0;

        //get all the doc in the collection quote & put in list_quotes
        firestore.collection("quote").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {

                // create object Quote with the field in the db
                let quote = new DocuQuote(doc.data().id, doc.data().text, doc.data().name);
                self.list_quotes[compteur] = quote;
                compteur++;
            });

            // Sort list by ID & Get one random quote
            self.list_quotes.sort(self.compareSortById);
            self.list_quotes[0] = self.randomItem(self.list_quotes);
        });
    }

    // comparaison use to sort array by id of the document, usefull to know which one is the last
    compareSortById(x, y): number {
        if (x.id < y.id)
            return 1;
        if (x.id > y.id)
            return -1;
        return 0;
    }

    // return ramdom item of a list
    randomItem(tab): DocuQuote {
        return tab[Math.floor(Math.random() * tab.length)];
    }

    get_Articles(): Array<DocuArticle> {
        return this.list_articles;
    }

    get_Talks(): Array<DocuTalk> {
        return this.list_talks;
    }

    get_Videos(): Array<DocuVideo> {
        return this.list_videos;
    }

    get_Quotes(): Array<DocuQuote> {
        return this.list_quotes;
    }

    // get one article 
    get_Article(id: number): DocuArticle {
        return this.list_articles.filter((item) => item.id === id)[0];
    }

    // get one video 
    get_Video(id: number): DocuVideo {
        return this.list_videos.filter((item) => item.id === id)[0];
    }

    get_Visible(): boolean {
        return this.talk_visible;
    }
}