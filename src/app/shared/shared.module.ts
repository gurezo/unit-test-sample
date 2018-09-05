import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AtomButtonComponent } from '@shared/atom-button/atom-button.component';
import { AtomInputTextComponent } from '@shared/atom-input-text/atom-input-text.component';
import { MoleculesComponent } from '@shared/molecules/molecules.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    AtomButtonComponent,
    AtomInputTextComponent,
    MoleculesComponent
  ],
  exports: [
    AtomButtonComponent,
    AtomInputTextComponent,
    MoleculesComponent
  ]
})
export class SharedModule { }
