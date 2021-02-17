import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit, OnDestroy {
  @Output() closeEvent = new EventEmitter<void>();
  @Input() paletteName = '';
  @Input() items: any = [];
  body = document.querySelector('body') as HTMLBodyElement;

  ngOnInit(): void {
    const width = window.innerWidth;
    if (width < 767) {
      this.body.classList.add('overflow-hidden');
    }
  }

  close(): void {
    this.closeEvent.emit();
  }

  ngOnDestroy(): void {
    this.body.classList.remove('overflow-hidden');
  }
}
