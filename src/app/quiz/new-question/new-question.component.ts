import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {QuestionService} from "../../services/question.service";
import {QuestionModel} from "../../services/question.model";

@Component({
  selector: 'app-new-question',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-question.component.html',
  styleUrl: './new-question.component.css'
})
export class NewQuestionComponent {

  constructor(private questionService:QuestionService) {
  }

  newQuestionForm = new FormGroup(
    {
      question:new FormControl('',Validators.required),
      answerA:new FormControl('',Validators.required),
      answerB:new FormControl('',Validators.required),
      answerC:new FormControl('',Validators.required),
      answerD:new FormControl('',Validators.required),
      correctAnswer:new FormControl('',Validators.required),

    }
  )

  AddQuestion(){
    if(!this.newQuestionForm.valid) return;
    const form = this.newQuestionForm.value;
    let previousId = this.questionService.questions.length;

    let newQuestion :QuestionModel = {
      id:previousId+1,
      question:form.question!,
      answerA:form.answerA!,
      answerB:form.answerB!,
      answerC:form.answerC!,
      answerD:form.answerD!,
      correctAnswer:parseInt(form.correctAnswer!)
    }

    this.questionService.addQuestion(newQuestion);

    this.newQuestionForm.reset();
  }
}
