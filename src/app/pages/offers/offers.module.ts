import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersService } from './offers.service';

@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, OffersRoutingModule],
  providers: [OffersService],
})
export class OffersModule {}
