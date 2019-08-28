import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from '../service/stock-exchange.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock-exchange',
  templateUrl: './create-stock-exchange.component.html',
  styleUrls: ['./create-stock-exchange.component.css']
})
export class CreateStockExchangeComponent implements OnInit {

  constructor(private router: Router,private stockExchangeService:StockExchangeService) { }

  ngOnInit() {
  }
  createStockExchange(stockFrom:NgForm)
  {
    console.log("test");
    this.stockExchangeService.createStockexchange(stockFrom.value)
    .subscribe( data => {
      alert("Stock created successfully.");
      this.router.navigate(['/list-stock-exchange'])
    });
    
  }

}




