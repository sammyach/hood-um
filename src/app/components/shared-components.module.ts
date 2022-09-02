import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SengaPostComponent } from './senga-post/senga-post.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SengaPostCommentComponent } from './senga-post-comment/senga-post-comment.component';
import { SengaPostDetailComponent } from './senga-post-detail/senga-post-detail.component';
import { SengaPostHeaderComponent } from './senga-post-header/senga-post-header.component';



@NgModule({
  declarations: [SengaPostComponent, SengaPostCommentComponent, SengaPostDetailComponent, SengaPostHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [SengaPostComponent, SengaPostCommentComponent, SengaPostDetailComponent, SengaPostHeaderComponent]
})
export class SharedComponentsModule { }
