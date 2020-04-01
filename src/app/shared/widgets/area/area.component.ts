import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;
  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions =
    {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
        text: 'Source: Wikipedia.org'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      exporting: {
        enabled: true
      },
      series: this.data
    };
    // This gives the export option on the chart
    HC_exporting(Highcharts);
    // To resize the charts on the load to be clear visible to user
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
