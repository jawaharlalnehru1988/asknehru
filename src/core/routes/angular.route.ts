import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("../../app/angular-demystify/angular-demystify.component").then(
                (m) => m.AngularDemystifyComponent
            ),
    }
];