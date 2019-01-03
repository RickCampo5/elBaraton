import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private categorieService: CategoriesService
  ) { }

  menu = []

  showCategories() {
    let container = document.getElementById('container-subdiv');
    let arrowUp = document.getElementById('arrowUp')
    let arrowDown = document.getElementById('arrowDown')
    container.classList.toggle('visible');
    container.classList.toggle('hide');
    container.style.display = 'inherit';
    arrowDown.classList.toggle('show-arrow')
    arrowDown.classList.toggle('hidden-arrow')
    arrowUp.classList.toggle('show-arrow')
    arrowUp.classList.toggle('hidden-arrow')
  }

  ngOnInit() {
    this.categorieService.getCategories()
    .subscribe(categories=>{
      this.menu = categories;
    })
  }

}
