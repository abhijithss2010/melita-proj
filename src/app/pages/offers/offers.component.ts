import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { Offer, Subscription } from './models/offers.interface';

enum SubType {
  Mobile = 'MOBILE',
  Televison = 'TELEVISION',
  Telephony = 'TELEPHONY',
  Internet = 'INTERNET',
}

enum UsageType {
  Sms = 'SMS',
  Data = 'DATA',
}
@Component({
  selector: 'melita-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  public offers = [];
  public subscriptions = [];
  public selectedOfferId = null;
  public SubType = SubType;
  public UsageType = UsageType;
  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offersService.getOffers().subscribe(
      (res: Offer[]) => {
        this.offers = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getSubscriptions(offerId: number) {
    this.offersService.getSubscriptions(offerId).subscribe(
      (res: Subscription[]) => {
        this.subscriptions = res;
      },
      (err) => {
        this.selectedOfferId = null;
        console.error(err);
      }
    );
  }

  selectedOffer(offerId: number) {
    this.selectedOfferId = offerId;
    this.getSubscriptions(offerId);
  }
}
