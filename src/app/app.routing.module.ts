import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CertificadosComponent } from "./portfolio/certificados/certificados.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";



const routes: Routes = [
    
    {path: 'certificados', component: CertificadosComponent},
    {path: '', component: PortfolioComponent},

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}