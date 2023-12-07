import {booleanAttribute, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {QuizComponent} from "./quiz/quiz/quiz.component";
import {NewQuestionComponent} from "./quiz/new-question/new-question.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QuizComponent, NewQuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mode = true;
  isGameOn = false;
  title = 'Quiz';
  button = "Dodaj pytanie";

  ChangeAppMode(){
    this.mode = !this.mode;
    if(this.mode)
      this.button = "Dodaj pytanie";
    else
      this.button = "Wróć do gry";

  }

  ChangeAppModeA(mode:boolean){
    this.isGameOn = mode;
  }
}
