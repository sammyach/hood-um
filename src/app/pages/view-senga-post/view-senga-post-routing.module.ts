import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSengaPostPage } from './view-senga-post.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSengaPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSengaPostPageRoutingModule {}
