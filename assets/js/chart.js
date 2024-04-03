$(document).ready(function () {

    // Chart Js

    // New Customer Chart

    var options = {
        series: [
            {
                name: 'Net Profit',
                data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
                /* radius: 30,	 */
            },
        ],
        chart: {
            type: 'area',
            height: 40,
            //width: 400,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }

        },

        colors: ['var(--primary)'],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 2,
            curve: 'straight',
            colors: ['var(--primary)'],
        },

        grid: {
            show: false,
            borderColor: '#eee',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: -1

            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false,
                style: {
                    fontSize: '12px',

                }
            },
            crosshairs: {
                show: false,
                position: 'front',
                stroke: {
                    width: 1,
                    dashArray: 3
                }
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: '12px',
                }
            }
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 0.9,
            colors: 'var(--primary)',
            type: 'gradient',
            gradient: {
                colorStops: [

                    {
                        offset: 0,
                        color: 'var(--primary)',
                        opacity: .4
                    },
                    {
                        offset: 0.6,
                        color: 'var(--primary)',
                        opacity: .4
                    },
                    {
                        offset: 100,
                        color: 'white',
                        opacity: 0
                    }
                ],

            }
        },
        tooltip: {
            enabled: false,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        }
    };

    var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers"), options);
    chartBar1.render();

    // All Project Chart

    var options = {
        series: [12, 30, 20],
        chart: {
            type: 'donut',
            width: 150,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 12,
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            fontFamily: 'Arial',
                            fontWeight: '500',
                            color: 'var(--white)',
                            offsetY: -17,
                        },
                        total: {
                            show: true,
                            fontSize: '11px',
                            fontWeight: '500',
                            fontFamily: 'Arial',
                            color: 'var(--white)',
                            label: 'Complete',

                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                }
            }
        },
        legend: {
            show: false,
        },
        colors: ['#3AC977', 'var(--primary)', 'var(--secondary)'],
        labels: ["Complete", "Pending", "Not Start"],
        dataLabels: {
            enabled: false,
        },
    };
    var chartBar1 = new ApexCharts(document.querySelector("#AllProject"), options);
    chartBar1.render();

    // New Experience

    var options = {
        series: [
            {
                name: 'Net Profit',
                data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
                /* radius: 30,	 */
            },
        ],
        chart: {
            type: 'area',
            height: 40,
            //width: 400,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }

        },

        colors: ['var(--primary)'],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 2,
            curve: 'straight',
            colors: ['#FF5E5E'],
        },

        grid: {
            show: false,
            borderColor: '#eee',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: -1

            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false,
                style: {
                    fontSize: '12px',
                }
            },
            crosshairs: {
                show: false,
                position: 'front',
                stroke: {
                    width: 1,
                    dashArray: 3
                }
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: '12px',
                }
            }
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 0.9,
            colors: '#FF5E5E',
            type: 'gradient',
            gradient: {
                colorStops: [

                    {
                        offset: 0,
                        color: '#FF5E5E',
                        opacity: .5
                    },
                    {
                        offset: 0.6,
                        color: '#FF5E5E',
                        opacity: .5
                    },
                    {
                        offset: 100,
                        color: 'white',
                        opacity: 0
                    }
                ],

            }
        },
        tooltip: {
            enabled: false,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        }
    };

    var chartBar1 = new ApexCharts(document.querySelector("#NewExperience"), options);
    chartBar1.render();

    // Projects Overview Chart

    var options = {
        series: [{
            name: 'Number of Projects',
            type: 'column',
            data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100]
        }, {
            name: 'Revenue',
            type: 'area',
            data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42]
        }, {
            name: 'Active Projects',
            type: 'line',
            data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20]
        }],
        chart: {
            height: 300,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [0, 1, 1],
            curve: 'straight',
            dashArray: [0, 0, 5]
        },
        legend: {
            fontSize: '13px',
            fontFamily: 'poppins',
            labels: {
                colors: '#888888',
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '18%',
                borderRadius: 6,
            }
        },

        fill: {
            //opacity: [0.1, 0.1, 1],
            type: 'gradient',
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                /* opacityFrom: 0.85,
                opacityTo: 0.55, */
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: 'var(--primary)',
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'var(--primary)',
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: '#3AC977',
                            opacity: 1
                        },
                        {
                            offset: 0.4,
                            color: '#3AC977',
                            opacity: .15
                        },
                        {
                            offset: 100,
                            color: '#3AC977',
                            opacity: 0
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: '#FF5E5E',
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: '#FF5E5E',
                            opacity: 1
                        }
                    ],
                ],
                stops: [0, 100, 100, 100]
            }
        },
        colors: ["var(--primary)", "#3AC977", "#FF5E5E"],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'month',
            labels: {
                style: {
                    fontSize: '13px',
                    colors: '#888888',
                },
            },
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,
            labels: {
                style: {
                    fontSize: '13px',
                    colors: '#888888',
                },
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#overiewChart"), options);
    chart.render();

    //   Total Earnings Chart

    var chartWidth = $("#earningChart").width();
    /* console.log(chartWidth); */

    var options = {
        series: [
            {
                name: 'Net Profit',
                data: [700, 650, 680, 600, 700, 610, 710, 620],
                /* radius: 30,	 */
            },
        ],
        chart: {
            type: 'area',
            height: 350,
            width: chartWidth + 55,
            toolbar: {
                show: false,
            },
            offsetX: -45,
            zoom: {
                enabled: false
            },
            /* sparkline: {
                enabled: true
            } */

        },

        colors: ['var(--primary)'],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            width: 2,
            curve: 'straight',
            colors: ['var(--primary)'],
        },
        grid: {
            show: true,
            borderColor: '#eee',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        yaxis: {
            show: true,
            tickAmount: 4,
            min: 0,
            max: 800,
            labels: {
                offsetX: 50,
            }
        },
        xaxis: {
            categories: ['', 'May ', 'June', 'July', 'Aug', 'Sep ', 'Oct'],
            overwriteCategories: undefined,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: true,
                offsetX: 5,
                style: {
                    fontSize: '12px',

                }
            },
        },
        fill: {
            opacity: 0.5,
            colors: 'var(--primary)',
            type: 'gradient',
            gradient: {
                colorStops: [

                    {
                        offset: 0.6,
                        color: 'var(--primary)',
                        opacity: .2
                    },
                    {
                        offset: 0.6,
                        color: 'var(--primary)',
                        opacity: .15
                    },
                    {
                        offset: 100,
                        color: 'white',
                        opacity: 0
                    }
                ],

            }
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val) {
                    return "$" + val + ""
                }
            }
        }
    };

    var chartBar1 = new ApexCharts(document.querySelector("#earningChart"), options);
    chartBar1.render();

    // Project Chart

    var options = {
        series: [30, 40, 20, 10],
        chart: {
            type: 'donut',
            width: 250,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '90%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 12,
                        },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontFamily: 'Arial',
                            fontWeight: '500',
                            offsetY: -17,
                        },
                        total: {
                            show: true,
                            fontSize: '11px',
                            fontWeight: '500',
                            fontFamily: 'Arial',
                            label: 'Total projects',

                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                }
            }
        },
        legend: {
            show: false,
        },
        colors: ['#FF9F00', 'var(--primary)', '#3AC977', '#FF5E5E'],
        labels: ["Compete", "Pending", "Not Start"],
        dataLabels: {
            enabled: false,
        },
    };
    var chartBar1 = new ApexCharts(document.querySelector("#projectChart"), options);
    chartBar1.render();

    // Map  

    $('#map').vectorMap({
        map: 'world_mill',
        series: {
            regions: [{
                values: gdpData,
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionTipShow: function (e, el, code) {
            el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
        }
    });

});