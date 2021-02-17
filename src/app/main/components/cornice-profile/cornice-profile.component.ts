import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cornice-profile',
  templateUrl: './cornice-profile.component.html',
  styleUrls: ['./cornice-profile.component.scss']
})
export class CorniceProfileComponent implements OnInit {
  @Output() openModalEvent = new EventEmitter<void>();
  @Input() text = '';
  @Input() title = '';
  @Input() modalId = '';

  corniceProfileItems = [
    {id: 0, value: 'Alto', selected: false},
    {id: 2, value: 'Concerto', selected: false},
    {id: 3, value: 'Symphony', selected: false},
    {id: 4, value: 'Tempo', selected: false},
    {id: 5, value: 'Trio', selected: false}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectedBtn(selectedBtn: any): any {
    this.corniceProfileItems.forEach(b => {
      b.selected = b.id === selectedBtn.id;
    });
  }

  openModal(): void {
    this.openModalEvent.emit();
  }
}
