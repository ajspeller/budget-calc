import { EditEvent } from '../shared/interfaces/EditEvent.interface';
import { BudgetItem } from './../shared/models/BudgetItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  totalBudget = 0;
  budgetItems: BudgetItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  onAddItem(item: BudgetItem): void {
    this.budgetItems.push(item);
    this.calculateTotal('add', item);
  }

  onDeleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.calculateTotal('delete', item);
  }

  onEditItem(editEvent: EditEvent): void {
    const index = this.budgetItems.indexOf(editEvent.old);
    this.budgetItems[index] = editEvent.new;
    this.calculateTotal('add', editEvent.new);
    this.calculateTotal('delete', editEvent.old);
  }

  calculateTotal(type: string, item: BudgetItem): void {
    if (type === 'add') {
      this.totalBudget += item.amount;
    }
    if (type === 'delete') {
      this.totalBudget -= item.amount;
    }
  }
}
