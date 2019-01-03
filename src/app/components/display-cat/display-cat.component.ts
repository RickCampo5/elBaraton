import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-cat',
  templateUrl: './display-cat.component.html',
  styleUrls: ['./display-cat.component.css']
})
export class DisplayCatComponent implements OnInit {

  constructor(
    ) { }

  @Input() categorie;

  ngOnInit() {
  }

}
