import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

declare var paypal: any

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit {
  @Input()
  order!:Order

  @ViewChild('paypal', {static: true})
  paypalElement!:ElementRef

  constructor(private orderService: OrderService,
    private cartService: CartService,
    private router: Router){}

  ngOnInit(): void {
    const self = this
    
  }
}
