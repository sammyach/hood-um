import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SengaPostModel } from 'src/app/services/data.service';

@Component({
  selector: 'app-senga-post',
  templateUrl: './senga-post.component.html',
  styleUrls: ['./senga-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SengaPostComponent implements OnInit {

  @Input() post: SengaPostModel;
  constructor() { }

  ngOnInit() {
    this.parsePost();
  }

  parsePost() {
    this.post.content = this.post.content.replace(/\#[a-zA-Z]+/g,'\<span class\=\"highlight\"\>$&\<\/span\>');
    this.post.content = this.post.content.replace(/\@[a-zA-Z]+/g,'\<span class\=\"highlight\"\>$&\<\/span\>');
  }

}
