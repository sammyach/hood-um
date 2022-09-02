import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSengaPostPageRoutingModule } from './view-senga-post-routing.module';

import { ViewSengaPostPage } from './view-senga-post.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSengaPostPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ViewSengaPostPage]
})
export class ViewSengaPostPageModule {}
