import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CategoriesService } from '../../services/categories.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private categoriesService: CategoriesService
  ) { }

  allCategories: any = []
  allProducts: any = []
  id = ""
  filteredCat = {}
  filteredProd = []

  filterCategories(id){
    this.allCategories.categories.forEach(elem => {
      if(id == elem.id) this.filteredCat = elem
    })
  }

  filterProducts(id){
    this.allProducts.products.forEach(elem => {
      if(id == elem.sublevel_id) this.filteredProd.push(elem)
    })
  }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params=>{
      this.id = params.id
    })

    this.categoriesService.getCategories()
    .subscribe(categories=>{
      this.allCategories = categories
      this.filterCategories(this.id)
    })
    
    this.productService.getProducts()
    .subscribe(products=>{
      this.allProducts = products
      this.filterProducts(this.id);
    })
  }

}
