import { Component, OnInit } from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
import { DocuService } from "../shared/docu/docu.service";
import { DocuArticle } from "../shared/docu/docu_article.model";
import { firebase } from "../app.component";

@Component({
    selector: "Article",
    moduleId: module.id,
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
    
    list_article = new Array<DocuArticle>();
    
    constructor(private docuService: DocuService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.

        let firestore = firebase.firestore;
        this.docuService.fill_Articles(firestore);
        this.list_article = this.docuService.get_Articles();
    }
}