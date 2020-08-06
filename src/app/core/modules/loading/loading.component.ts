import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'melita-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  public isLoading$ = this.loadingService.isLoading;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {}
}
