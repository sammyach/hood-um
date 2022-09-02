import { Component, OnInit } from '@angular/core';
import { DataService, SengaPostModel } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts: SengaPostModel[]=[];
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.posts = this.ds.getPosts();
    console.log('posts =>', this.posts);
  }

}
