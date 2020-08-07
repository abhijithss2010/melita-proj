import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OffersRoutingModule } from './offers-routing.module';
import { OffersService } from './offers.service';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [OffersComponent, PieChartComponent],
  imports: [CommonModule, OffersRoutingModule, ChartsModule],
  providers: [OffersService],
})
export class OffersModule {}
