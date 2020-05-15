import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ArticleDetailComponent } from "./article-detail/article-detail.component"
import { VideoDetailComponent } from "./video-detail/video-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NativeScriptRouterModule
    ],
    declarations: [
        HomeComponent,
        ArticleDetailComponent,
        VideoDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
