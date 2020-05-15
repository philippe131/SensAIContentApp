import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleComponent } from "./article.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ArticleRoutingModule
    ],
    declarations: [
        ArticleComponent,
        ArticleDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        ArticleDetailComponent
    ]
})
export class ArticleModule { }