function CreatePriceHistoryGraph( line1, numYAxisTicks, strFormatPrefix, strFormatSuffix )
{
    var plot = $J.jqplot('pricehistory', [line1], {
        title:{text: 'Median Sale Prices', textAlign: 'left' },
        gridPadding:{left: 45, right:45, top:25},
        axesDefaults:{ showTickMarks:false },
        axes:{
            xaxis:{
                renderer:$J.jqplot.DateAxisRenderer,
                tickOptions:{formatString:'%b %#d %Y<span class="priceHistoryTime"> %#I%p<span>'},
                pad: 1
            },
            yaxis: {
                pad: 1.1,
                tickOptions:{formatString:strFormatPrefix + '%0.2f' + strFormatSuffix, labelPosition:'start', showMark: false},
                numberTicks: numYAxisTicks
            }
        },
        grid: {
            gridLineColor: '#1b2939',
            borderColor: '#1b2939',
            background: '#101822'
        },
        cursor: {
            show: true,
            zoom: true,
            showTooltip: false
        },
        highlighter: {
            show: true,
            lineWidthAdjust: 2.5,
            sizeAdjust: 5,
            showTooltip: true,
            tooltipLocation: 'n',
            tooltipOffset: 20,
            fadeTooltip: true,
            yvalues: 2,
            formatString: '<strong>%s</strong><br>%s<br>%d sold'
        },
        series:[{lineWidth:3, markerOptions:{show: false, style:'circle'}}],
        seriesColors: [ "#688F3E" ]
    });

    plot.defaultNumberTicks = numYAxisTicks;
    return plot;
}