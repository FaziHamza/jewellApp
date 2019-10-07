import { Component, OnInit } from '@angular/core';
import { GoldRateService } from '../../shared/Services/GoldRate/gold-rate.service';

@Component({
  selector: 'app-gold-rate-list',
  templateUrl: './gold-rate-list.component.html',
  styleUrls: ['./gold-rate-list.component.css']
})
export class GoldRateListComponent implements OnInit {

  constructor(private goldRateService :GoldRateService) { }

  ngOnInit() {
    this.goldRateService.getGoldRate();
  }

}
