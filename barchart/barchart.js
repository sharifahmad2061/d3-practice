const dataArray = [10, 20, 30]

const svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%')

svg.selectAll('rect').data(dataArray)
    .enter().append("rect")
    .attr('height', (datapoint, index) => {
        return datapoint * 10;
    })
    .attr('width', '100')
    .attr('x', (datapoint, index) => {
        return 110 * index;
    })
    .attr('y', (datapoint, index) => {
        return 400 - (datapoint * 10);
    })
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('stroke-width', '2px')
    .attr('rx', '5')