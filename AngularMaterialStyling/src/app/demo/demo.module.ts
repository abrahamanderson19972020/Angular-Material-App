import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [CommonModule, MaterialModule, DemoRoutingModule, FlexLayoutModule],
  exports: [],
})
export class DemoModule {}
