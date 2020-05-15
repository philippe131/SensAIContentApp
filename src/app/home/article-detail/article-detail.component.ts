import { Component, OnInit, ɵpublishDefaultGlobalUtils } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DocuArticle } from "../../shared/docu/docu_article.model";
import { DocuService } from "../../shared/docu/docu.service";
import { RouterExtensions } from "nativescript-angular/router";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./article-detail.component.html",
    styleUrls: ["./article-detail.component.css"]
})
export class ArticleDetailComponent implements OnInit {
    article: DocuArticle;

    constructor(
        private docuService: DocuService,
        private route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.article = this.docuService.get_Article(id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    onTapSource(source): void {
        openUrl(source);
    }
}