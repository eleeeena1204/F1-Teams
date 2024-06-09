import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Item } from '../item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class EditItemComponent {
  @Input() item!: Item;

  constructor(private modalController: ModalController) { }

  close() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.item);
  }

}
