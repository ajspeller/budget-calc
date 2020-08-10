import { BudgetItem } from '../models/BudgetItem.model';

export interface EditEvent {
  old: BudgetItem;
  new: BudgetItem;
}
