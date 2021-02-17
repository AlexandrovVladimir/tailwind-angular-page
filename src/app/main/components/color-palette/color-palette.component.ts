import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  @Output() openModalEvent = new EventEmitter<void>();
  @Input() title = '';
  @Input() text = '';
  @Input() modalId = '';
  @Input() paletteName = '';
  @Input() items: any[] = [];
  isOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  open(): void {
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  openModal(): void {
    this.openModalEvent.emit();
  }

}
