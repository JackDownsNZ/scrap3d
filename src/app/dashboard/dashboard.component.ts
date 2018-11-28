import { Component, OnInit } from '@angular/core';
import { TableData } from '../lbd/lbd-table/lbd-table.component';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { Task } from '../lbd/lbd-task-list/lbd-task-list.component';

import * as Chartist from 'chartist';

declare var $:any;

@Component({
  selector: 'dashboard-cmp',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
    ngOnInit(){}
}
