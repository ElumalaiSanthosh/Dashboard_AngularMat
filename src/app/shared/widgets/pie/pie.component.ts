import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  chartOptions = {};
  Highcharts = Highcharts;
  @Input() data=[];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions =
    {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
    };
    // This gives the export option on the chart
    HC_exporting(Highcharts);
    // To resize the charts on the load to be clear visible to user
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
