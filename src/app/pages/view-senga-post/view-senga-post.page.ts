import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, PostComment, SengaPostCommentModel, SengaPostModel } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-senga-post',
  templateUrl: './view-senga-post.page.html',
  styleUrls: ['./view-senga-post.page.scss'],
})
export class ViewSengaPostPage implements OnInit {

  post: SengaPostModel;
  comments: PostComment[];
  constructor(private route: ActivatedRoute, private ds: DataService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.post = this.ds.getPosts().find(e=>e.id === +id);
    this.comments = this.ds.getPostComments(+id)?.comments;
  }

}
