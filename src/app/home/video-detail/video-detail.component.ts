import { Component, OnInit, ɵpublishDefaultGlobalUtils } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DocuService } from "../../shared/docu/docu.service";
import { RouterExtensions } from "nativescript-angular/router";
import { openUrl } from "tns-core-modules/utils/utils";
import { DocuVideo } from "~/app/shared/docu/docu_video.model";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./video-detail.component.html",
    styleUrls: ["./video-detail.component.css"]
})
export class VideoDetailComponent implements OnInit {
    
    video: DocuVideo;

    constructor(
        private docuService: DocuService,
        private route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.video = this.docuService.get_Video(id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    onTapSource(source): void {
        openUrl(source);
    }
}