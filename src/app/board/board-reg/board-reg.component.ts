import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BoardService } from '../services/board.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Board } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-board-reg',
  templateUrl: './board-reg.component.html',
  styleUrls: ['./board-reg.component.css']
})
export class BoardRegComponent implements OnInit {

  boardForm:FormGroup;
  htmlContent:string;
  title:string;

  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private boardService:BoardService,
    private router: Router) { }

  ngOnInit() {
    // this.buildForm();
  }

  buildForm(){
    this.boardForm = this.formBuilder.group({
      title: ['', [
        Validators.required
      ]],
      content: ['', [
        Validators.required
      ]],
    });
  }

  onSubmit(){
    let board: Board = new Board();
    board['title'] = this.title;
    board['content'] = this.htmlContent;
    board['writer'] = this.authService.getMemberid();
    this.boardService.regBoard(board).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/board/list']);
      }
    )
  }

  // get title() {
  //   return this.boardForm.get('title');
  // }

  // get content() {
  //   return this.boardForm.get('content');
  // }


}