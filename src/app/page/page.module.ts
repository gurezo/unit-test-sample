import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { OrganismsComponent } from './organisms/organisms.component';
import { PageComponent } from './page.component';
import { PageService } from './page.service';
import { PageMockService } from './page.service.mock';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    OrganismsComponent,
    PageComponent
  ],
  exports: [
    PageComponent
  ],
  providers: [
    { provide: PageService, useClass: PageMockService }
  ]
})
export class PageModule { }
