import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  companies:string[];
  constructor(private companyService:CompanyService
    ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response)
  {
    console.log(response);
    this.companies=response;
  }
}





