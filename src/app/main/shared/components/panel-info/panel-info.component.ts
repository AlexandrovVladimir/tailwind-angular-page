import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrls: ['./panel-info.component.scss']
})
export class PanelInfoComponent implements OnInit {
  @Output() openModalEvent = new EventEmitter<string>();
  @Input() title = '';
  @Input() text = '';
  @Input() modalId = '';

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.openModalEvent.emit(this.modalId);
  }
}
