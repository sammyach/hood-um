import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/services/data.service';

@Component({
  selector: 'app-senga-post-comment',
  templateUrl: './senga-post-comment.component.html',
  styleUrls: ['./senga-post-comment.component.scss'],
})
export class SengaPostCommentComponent implements OnInit {

  @Input() comment: PostComment;
  constructor() { }

  ngOnInit() {}

}
