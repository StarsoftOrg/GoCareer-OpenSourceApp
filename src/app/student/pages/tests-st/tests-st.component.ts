import { Component } from '@angular/core';

@Component({
  selector: 'app-tests-st',
  templateUrl: './tests-st.component.html',
  styleUrls: ['./tests-st.component.css']
})
export class TestsStComponent {
  cardData: { imageUrl: string, title: string, amount: string }[] = [
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      amount: '20 preguntas' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      amount: '10 preguntas' },
    { imageUrl: 'assets/img/home-test.jpg',
      title: 'Asiste a nuestra charla sobre competencias digitales.',
      amount: '20 preguntas' }
  ];
}
