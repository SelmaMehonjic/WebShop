import { Component, Output, EventEmitter } from '@angular/core';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private store: Store<fromProduct.ProductState>) { }

  onClose() {
    this.closeSidenav.emit();
  }

  onAddNewCategory() {
    this.store.dispatch(new productActions.CategoryState('addNewCategory'));
  }
}
