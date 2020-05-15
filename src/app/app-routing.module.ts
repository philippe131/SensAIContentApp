import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BrowseComponent } from "./browse/browse.component";
import { ArticleDetailComponent } from "./article/article-detail/article-detail.component";

export const routes: Routes = [
    {
        path: "",
        // redirectTo: "/(homeTab:home/default//browseTab:browse/default//articleTab:article/default//searchTab:search/default)",
        redirectTo: "/(homeTab:home/default//browseTab:browse/default//articleTab:article/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/home/home.module#HomeModule",
        outlet: "homeTab"
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/browse/browse.module#BrowseModule",
        outlet: "browseTab"
    },
    {
        path: "article",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/article/article.module#ArticleModule",
        outlet: "articleTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
