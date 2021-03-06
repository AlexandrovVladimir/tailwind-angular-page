import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss']
})
export class StickyHeaderComponent implements OnInit {
  @Input() text = '';
  @Input() modalId = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
