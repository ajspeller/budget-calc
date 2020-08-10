import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BudgetItem } from './../shared/models/BudgetItem.model';
import { EditEvent } from '../shared/interfaces/EditEvent.interface';

import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() items: BudgetItem[];
  @Output() deleteItem = new EventEmitter<BudgetItem>();
  @Output() editItem = new EventEmitter<EditEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDelete(item: BudgetItem): void {
    this.deleteItem.emit(item);
  }

  onEdit(item: BudgetItem): void {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result: ', result);
      if (result) {
        this.editItem.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}
