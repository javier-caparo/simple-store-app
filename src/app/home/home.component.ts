import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';


export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [fadeAnimation]
})


export class HomeComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit(): void {
  }

}
