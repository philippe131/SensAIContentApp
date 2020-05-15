import { Component, OnInit } from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
import { DocuTalk } from '../shared/docu/docu_talk.model'
import { firebase } from "../app.component";
import { DocuService } from "../shared/docu/docu.service";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {

    list_talks = new Array<DocuTalk>();

    constructor(private docuService: DocuService) {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
        let firestore = firebase.firestore;
        this.docuService.fill_Talks(firestore);
        this.list_talks = this.docuService.get_Talks();
    }

    launch_stationf(): void {
        utils.openUrl("https://www.stationfightclub.com");
    }

    launch_sensai(): void{
        utils.openUrl("https://www.sensai.app");
    }

    launch_42(): void{
        utils.openUrl("https://www.42.fr");
    }
}