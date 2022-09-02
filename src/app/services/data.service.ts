/* eslint-disable max-len */
import { Injectable } from '@angular/core';

export interface SengaPostModel{
  id: number;
  username: string;
  handle: string;
  authorImg: string;
  date: string;
  content: string;
  likes: number;
  responses: number;
  reposts: number;
  attachment?: string;
}

export interface SengaPostCommentModel{
  postId: number;
  comments: PostComment[];
}

export interface PostComment{
  id: number;
  content: string;
  likes: number;
  username: string;
  authorImg: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPosts(): SengaPostModel[]{
    return [
      {
        id: 1,
        authorImg: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ben.jpg',
        date: '1586326823',
        content: 'My first senga.',
        handle: 'mas',
        username: 'Mas_Cot',
        likes: 45,
        reposts: 4,
        responses: 12,
        attachment: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-1.jpeg'
      },
      {
        id: 2,
        authorImg: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ionic.jpg',
        date: '1586326823',
        content: 'Crazy, according to @appfigures, @Ionicframework is one of the top 4 development SDKs on both iOS and Android, and one of the top three 3rd party SDKs (more like top 2.5 since it overlaps w/ Cordova) Rocket',
        handle: 'mase',
        username: 'MasCot2',
        likes: 45,
        reposts: 4,
        responses: 12,
        attachment: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-0.jpeg'
      },
      {
        id: 3,
        authorImg: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-max.jpg',
        date: '1586326823',
        content: 'My first senga.',
        handle: 'masee',
        username: 'MasCot3_',
        likes: 45,
        reposts: 4,
        responses: 12,
        attachment: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-0.jpeg'
      },
      {
        id: 4,
        authorImg: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ionic.jpg',
        date: '1586326823',
        content: 'My first senga.',
        handle: 'maseee',
        username: '_MasCot4',
        likes: 45,
        reposts: 4,
        responses: 12,
        attachment: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/attachement-0.jpeg'
      },
    ];
  }

  getPostComments(id: number): SengaPostCommentModel{
    return [
      {
        postId: 2,
        comments: [
          {
            id: 1,
            likes: 5,
            content: 'cool chop. jxt trying...',
            authorImg: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-ben.jpg',
            username: 'ben',
            date: '1586326823',
          },
          {
            id: 2,
            likes: 51,
            content: 'god did!',
            authorImg: 'https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/twitter-max.jpg',
            username: 'max',
            date: '1586326823',
          }
        ]
      }
    ].find(x=>x.postId === id);
  }
}
