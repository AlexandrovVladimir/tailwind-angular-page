import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  ceilingProducts = [1, 2, 3, 4, 5];
  wallProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modalId = '';

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  openModal(modalId: string): void {
    this.modalId = modalId;

    this.modalService.open(this.modalId);
  }

  closeModal(modalId: string): void {
    this.modalId = modalId;

    this.modalService.close(this.modalId);
  }
}
