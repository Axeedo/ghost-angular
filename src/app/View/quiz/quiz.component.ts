import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { gsap } from 'gsap';
import { Question } from '../../models/Question';
import { questionsList } from '../../helpers/questionsList';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit{
  @ViewChild('slider', { static: true }) answer!: ElementRef<HTMLDivElement>;

  currentQuestionIndex = 0;
  progressValue!: number;
  questions = questionsList;

  constructor() {}

  ngOnInit() {
    this.increaseProgressValue();
  }
 
  get question(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  increaseProgressValue(): void {
    this.progressValue = (100 * (this.currentQuestionIndex + 1)) / this.questions.length;
  }


  onSelect( answer: HTMLDivElement ):void {
    this.answer.nativeElement.childNodes.forEach((node: HTMLDivElement) => {
      if (node.classList && node.classList.contains('selected')) {
        node.classList.remove('selected');
      }
    });
    answer.classList.add('selected');
  }

  prev() {}

  goToNextQuestion(): void {  }
}
