import { Component, OnInit, NgModule } from "@angular/core";
import { firebase } from "../app.component";
import * as utils from "tns-core-modules/utils/utils";
import { DocuTalk } from '../shared/docu/docu_talk.model'
import { DocuService } from '../shared/docu/docu.service'
import { DocuVideo } from "../shared/docu/docu_video.model";
import { DocuArticle } from "../shared/docu/docu_article.model";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.css"]
})

export class BrowseComponent implements OnInit {
    
    list_videos = new Array<DocuVideo>();

    constructor(private docuService: DocuService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        // note that the options object is optional, but you can use it to specify the source of data ("server", "cache", "default").
        
        let firestore = firebase.firestore;
        this.docuService.fill_Videos(firestore);
        this.list_videos = this.docuService.get_Videos();
    }

    linkVideo(url_video): void {
        utils.openUrl(url_video);
    }
}