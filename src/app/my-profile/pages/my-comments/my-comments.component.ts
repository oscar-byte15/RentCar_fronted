import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../model/comment";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  @Input() userComment !: Comment;
  @Input() commentId !: string;
  constructor() {
    this.userComment = {} as Comment;
  }

  ngOnInit(): void {

  }


}
