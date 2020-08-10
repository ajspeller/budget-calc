import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BudgetItem } from './../../shared/models/BudgetItem.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() deleteItem = new EventEmitter<BudgetItem>();
  @Output() editItem = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: BudgetItem): void {
    this.deleteItem.emit(item);
  }

  onTriggerModal(): void {
    this.editItem.emit();
  }
}
