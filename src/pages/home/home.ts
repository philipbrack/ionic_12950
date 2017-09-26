import {Component} from '@angular/core';
import {ViewChild} from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isPaused: boolean;
  @ViewChild('testspinner') testspinner;

  constructor() {
    this.isPaused = false; // set to true will cause to never have animation state running.
  }


  containsPausedClass(list: string[]) {
    return (list.indexOf('spinner-paused') != -1);
  }

  ngAfterViewInit() {
    // if the spinner is allows to load without 'spinner-paused' then safari will work.
    setTimeout(() => {
      this.isPaused = true;
    }, 0);
    console.log('test spinner is paused ',
      this.containsPausedClass(this.testspinner._elementRef.nativeElement.classList.value));

  }

  togglePause() {
    this.isPaused = !this.isPaused;

    setTimeout(() => {

      console.log('test spinner is paused ',
        this.containsPausedClass(this.testspinner._elementRef.nativeElement.classList.value));
    }, 100);
  }

}
