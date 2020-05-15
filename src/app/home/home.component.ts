import { Component, OnInit } from "@angular/core";
import { DocuService } from "../shared/docu/docu.service";
import * as utils from "tns-core-modules/utils/utils";
import { DocuTalk } from '../shared/docu/docu_talk.model'
import { firebase } from "../app.component";
import { RouterExtensions } from 'nativescript-angular/router'
import { DocuVideo } from "../shared/docu/docu_video.model";
import { DocuArticle } from "../shared/docu/docu_article.model";

@Component({
    selector: "Home",
    providers: [DocuService],
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {

    list_videos = new Array<DocuVideo>();
    list_articles = new Array<DocuArticle>();
    list_talks = new Array<DocuTalk>();

    constructor(private docuService: DocuService, private routeur: RouterExtensions) {
    }

    ngOnInit(): void {
        
        // fill all my list
        let firestore = firebase.firestore;
        this.docuService.fill_Talks(firestore);
        this.list_talks = this.docuService.get_Talks();
        this.docuService.fill_Articles(firestore);
        this.list_articles = this.docuService.get_Articles();
        this.docuService.fill_Videos(firestore);
        this.list_videos = this.docuService.get_Videos();

    }

    launch_stationf(): void {
        utils.openUrl("https://www.stationfightclub.com");
    }

    launch_sensai(): void{
        utils.openUrl("https://www.sensai.app");
    }

    linkVideo(url_video): void {
        utils.openUrl(url_video);
    }
}