import { Component } from '@angular/core';
interface recomm{
  pImg:string
}
@Component({
  selector: 'app-recomm-products',
  standalone: true,
  imports: [],
  templateUrl: './recomm-products.component.html',
  styleUrl: './recomm-products.component.css'
})
export class RecommProductsComponent {
recomProduct:recomm[]=[
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
]

}

