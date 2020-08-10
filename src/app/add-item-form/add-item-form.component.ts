import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { BudgetItem } from './../shared/models/BudgetItem.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() formSubmit = new EventEmitter<BudgetItem>();

  isNewItem = false;

  constructor() {}

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.item = new BudgetItem(null, '');
      this.isNewItem = true;
    }
  }

  onSubmit(form: NgForm): void {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
