import { BudgetItem } from './../shared/models/BudgetItem.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() items: BudgetItem[];
  @Output() deleteItem = new EventEmitter<BudgetItem>();
  
  constructor() {}

  ngOnInit(): void {}

  onDelete(item: BudgetItem): void {
    this.deleteItem.emit(item);
  }
}
