import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {

  imgSelected: string;

  @Input() product: any;

  constructor() { }

  ngOnInit() {
    this.imgSelected = this.product.img[0];
  }

  selectImg( index: number){
    this.imgSelected = this.product.img[index];
  }

}
