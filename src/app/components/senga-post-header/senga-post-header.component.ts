import { Component, Input, OnInit } from '@angular/core';
import { SengaPostModel } from 'src/app/services/data.service';

@Component({
  selector: 'app-senga-post-header',
  templateUrl: './senga-post-header.component.html',
  styleUrls: ['./senga-post-header.component.scss'],
})
export class SengaPostHeaderComponent implements OnInit {

  @Input() username: string;
  @Input() time: string;
  @Input() authorImg: string;
  constructor() { }

  ngOnInit() {}

}
