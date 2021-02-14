import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BgComponent } from './bg/bg.component';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    declarations: [
        PortfolioComponent,
        BgComponent
    ],
    exports: [
        PortfolioComponent,
        CommonModule
    ]
})
export class PortfolioModule{

}