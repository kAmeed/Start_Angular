import { Component } from '@angular/core';
import { RecommProductsComponent } from '../recomm-products/recomm-products.component';
interface product{
  pImg:string
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RecommProductsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
productList:product[]=[
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "},
  {pImg:"assets/Images/poert1.png "},
  {pImg:"assets/Images/port2.png "},
  {pImg:"assets/Images/port3.png "}
]
}
