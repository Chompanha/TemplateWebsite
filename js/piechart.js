const cases = document.querySelector('#activecase');
const deaths = document.querySelector('#death');
const recovered = document.querySelector('#recover');

const ct = document.getElementById('piechart').getContext('2d');

let mychart = new Chart  (ct , {
    type: 'pie',
    data: {

        labels : ['Active Cases' , 'Deaths','Recovered'],
        datasets : [
            {
                label : '# of votes',
                data : [0,0,0],
                backgroundColor : ['rgb(214, 0, 82)','#de3800' ,'rgb(38, 250, 201)'],
                borderWidth:1
            }
            
        ]
    }
});



const updateChartValue = (input , dataOrder)=>{
    input.addEventListener ('change',e=>{
         mychart.data.datasets[0].data[dataOrder] = e.target.value;
         mychart.update();
    });
};


updateChartValue(cases,0);
updateChartValue(deaths,1);
updateChartValue(recovered,2);