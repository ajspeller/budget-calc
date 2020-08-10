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
    this.calculateTotal(item);
  }

  onDeleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.calculateTotal(item);
  }
  onUpdateItem(): void {}

  calculateTotal(item: BudgetItem): void {
    this.totalBudget += item.amount;
  }
}
