import {Component, EventEmitter, Output, signal} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuestionService} from "../../services/question.service";
import {QuestionModel} from "../../services/question.model";
import {QuestionComponent} from "../question/question.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, ReactiveFormsModule, QuestionComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  @Output() currentlyPlaying = new EventEmitter<boolean>();
  questions = this.questionService.questions;
  currentQuestion = 0;
  isGameOn = false;
  isEndGame = false;
  score = 0;

  constructor(private questionService:QuestionService) {
  }

  StartGame(){
    this.currentQuestion = 0;
    this.isGameOn = true;
    this.isEndGame = false;
    this.score = 0;
    this.currentlyPlaying.emit(true);
  }

  GoToNextQuestion(points:number){
    this.score += points;
    if(this.currentQuestion == this.questions.length-1){
      this.isGameOn = false;
      this.isEndGame = true;
      this.currentlyPlaying.emit(false);
    }
    else{
      this.currentQuestion++;
    }
  }

}
