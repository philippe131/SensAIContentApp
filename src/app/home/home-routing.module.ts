import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";


const routes: Routes = [
    { path: "default", component: HomeComponent },
    { path: "article/:id", component: ArticleDetailComponent },
    { path: "video/:id", component: VideoDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
