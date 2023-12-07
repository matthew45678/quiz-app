import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {FormsModule,NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  questions = this.questionService.questions;
  answer=-1;
  isvalid = true;
  @Input({required:true}) question!:number;
  @Output() grantPoints = new EventEmitter<number>();
  constructor(private questionService:QuestionService) {
  }

  checkAnswer(form : NgForm){
    let points = 0;
    console.log(form.value)
    if(form.value.answer == -1){
      this.isvalid = false;
      return;
    }
    if(form.value.answer == this.questions[this.question].correctAnswer)
      points = 1;
    form.resetForm();
    this.isvalid = true;
    this.grantPoints.emit(points);
  }
}
