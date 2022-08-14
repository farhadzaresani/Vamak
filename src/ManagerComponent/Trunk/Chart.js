import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'


export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          options: {
            chart: {
              height: 350,
              width: 400 ,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
       
            grid: {
              row: {
                colors: [ 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر','دی','بهمن','اسفند',],
            }
          },
        
        
        };
      }

    

      render() {
        return (
          

    <div id="chart" className='bg-white rounded-lg w-[77vw] mb-5'>
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
     ) }
    }