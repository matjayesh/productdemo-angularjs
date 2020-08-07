import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../common/model/product.model';
import { ToastrService } from 'ngx-toastr';
import { HttpRequestsService } from 'src/app/common/service/http-requests.service';
import { UtilityService } from 'src/app/common/service/utility.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: []
})
export class ProductListComponent implements OnInit {
  productList = [];
  constructor(private toastr: ToastrService, private httpService: HttpRequestsService, private utility: UtilityService) { }

  ngOnInit() {
    this.getAllProductList();
  }
  async getAllProductList() {
    try {
      this.utility.showLoading();
      const products: any = await this.httpService.get(`/products/?pageNo=0`);
      this.productList = products.productsDetails;
      this.utility.hideLoading();
    } catch (err) {
      this.utility.hideLoading();
    }
  }
}
