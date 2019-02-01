import { Component, OnInit, Input } from '@angular/core';
import * as fromProduct from '../../store/product.reducer';
import { Store } from '@ngrx/store';
import * as productActions from '../../store/product.action';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() pr;
  @Input() arr;
  isUserAdmin: string;
  constructor(private store: Store<fromProduct.ProductState>, private auth: AuthService) { }

  ngOnInit() {
    this.isUserAdmin = this.auth.isUserAdmin();
  }
  onDelete(id: number) {
    this.store.dispatch(new productActions.DeleteProduct(id));
  }
}
