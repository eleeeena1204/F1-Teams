import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Item } from '../item.model';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ViewItemComponent {
  @Input() item!: Item;

  constructor(private modalController: ModalController) { }

  close() {
    this.modalController.dismiss();
  }

}
