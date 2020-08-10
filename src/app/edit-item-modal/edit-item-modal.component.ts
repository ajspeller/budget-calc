import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BudgetItem } from './../shared/models/BudgetItem.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BudgetItem
  ) {}

  ngOnInit(): void {}

  onModalSubmit(updatedItem: BudgetItem): void {
    this.dialogRef.close(updatedItem);
  }
}
