import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { AppRoutingModule } from "../app-routing.module"
import { BrowseComponent } from "./browse.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";

const routes: Routes = [
    {
        path: "default",
        component: BrowseComponent
    },
    { path: "video/:id", component: VideoDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BrowseRoutingModule { }
