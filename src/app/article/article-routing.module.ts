import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ArticleComponent } from "./article.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";

const routes: Routes = [
    { path: "default", component: ArticleComponent },
    { path: "article/:id", component: ArticleDetailComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ArticleRoutingModule { }
