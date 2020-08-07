import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Offer, Subscription } from './models/offers.interface';
import { map } from 'rxjs/operators';
@Injectable()
export class OffersService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getOffers(): Observable<Offer[]> {
    return this.http
      .get<{ offers: Offer[] }>(`${this.baseUrl}/interview/api/offers`)
      .pipe(
        map((data) => {
          return data.offers;
        })
      );
  }

  getSubscriptions(offerId: number): Observable<Subscription[]> {
    return this.http
      .get<{ subscriptions: Subscription[] }>(
        `${this.baseUrl}/interview/api/offers/${offerId}/subscriptions`
      )
      .pipe(
        map((data) => {
          return data.subscriptions;
        })
      );
  }
}
