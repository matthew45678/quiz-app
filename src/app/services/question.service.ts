import { Injectable } from '@angular/core';
import {QuestionModel} from "./question.model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions :QuestionModel[] = [{
    id:0,
    question:"Q1",
    answerA:"a",
    answerB:"b",
    answerC:"c",
    answerD:"d",
    correctAnswer:2
  },{
    id:1,
    question:"Q2",
    answerA:"a",
    answerB:"b",
    answerC:"c",
    answerD:"d",
    correctAnswer:1
  }];

  addQuestion(question:QuestionModel){
    this.questions.push(question);
  }

  constructor() {
  }
}
