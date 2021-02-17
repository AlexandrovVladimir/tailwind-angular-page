import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
  @Output() openModalEvent = new EventEmitter<void>();
  @Input() text = '';
  @Input() title = '';
  @Input() modalId = '';

  corniceRange = [
    {id: 0, value: 'Contemporary', selected: false},
    {id: 1, value: 'Inspiration', selected: false}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectedBtn(selectedBtn: any): any {
    this.corniceRange.forEach(b => {
      b.selected = b.id === selectedBtn.id;
    });
  }

  openModal(): void {
    this.openModalEvent.emit();
  }
}
