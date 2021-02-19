import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BgComponent } from './bg/bg.component';
import { PortfolioComponent } from './portfolio.component';
import { CardPrincipalComponent } from './card-principal/card-principal.component';
import { GridComponent } from './grid/grid.component';
import { MenuComponent } from './menu/menu.component';
import { SectionComponent } from './section/section.component';

@NgModule({
    declarations: [
        PortfolioComponent,
        BgComponent,
        CardPrincipalComponent,
        GridComponent,
        MenuComponent,
        SectionComponent
    ],
    exports: [
        PortfolioComponent,
        CommonModule
    ]
})
export class PortfolioModule{

}