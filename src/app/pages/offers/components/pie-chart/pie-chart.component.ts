import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'melita-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() doughnutChartLabels: Label[] = ['Used', 'Remaining'];
  @Input() doughnutChartData = [[125, 1024 - 125]];
  public doughnutChartType: ChartType = 'doughnut';
  public options: ChartOptions = {
    events: [],
    legend: {
      onClick: (e) => {
        console.log('Clicked an item with text: ' + e);
        e.stopPropagation();
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnchanges() {
    console.log(this.doughnutChartData);
  }
}
