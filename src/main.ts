// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { enableProdMode } from "@angular/core";

// pour quand l'app sera prete à etre lance sur le store
enableProdMode();

platformNativeScriptDynamic().bootstrapModule(AppModule);
