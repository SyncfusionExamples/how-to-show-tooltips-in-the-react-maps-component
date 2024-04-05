import { MapsComponent, LayersDirective, LayerDirective,Inject, MapsTooltip} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';

let data: object[] = [
  { "name": "India", "rank": "1", "win": "2", "country": "India" },
  { "name": "Dominican Rep.", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Cuba", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Jamaica", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Haiti", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Guyana", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Suriname", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Trinidad and Tobago", "rank": "3", "win": "2", "country": "West Indies" },
  { "name": "Sri Lanka", "rank": "3", "win": "1", "country": "Sri Lanka" },
  { "name": "United Kingdom", "rank": "3", "win": "0", "country": "England" },
  { "name": "Pakistan", "rank": "2", "win": "1", "country": "Pakistan" },
  { "name": "New Zealand", "rank": "1", "win": "0", "country": "New Zealand" },
  { "name": "Australia", "rank": "7", "win": "5", "country": "Australia" }
]
  
function App() {
  
  return (
  <div className="App">
  <MapsComponent   titleSettings={ { text: 'Finalist in Cricket World Cup' } } tooltipDisplayMode= 'MouseMove'
   >
  <Inject services={[MapsTooltip]}/>
  <LayersDirective>
  <LayerDirective shapeData={world_map}
  dataSource={data} shapeDataPath='name' shapePropertyPath='name'
  tooltipSettings={{
  visible: true,
  valuePath: 'name',
  // fill: '#C35C5C',
  // textStyle: {
  //   color: 'white',
  //   fontFamily: 'Times New Roman',
  //   fontStyle: 'Sans-serif',
  //   fontWeight: 'Bold',
  // },
  // format: 'Name: ${name} <br> Rank: ${rank}',
  template: '<div style="border: 1px solid black; color: white; background-color:#353F4C;padding: 5px">${name}<br><hr style="margin-top: 3px;margin-bottom:3px;border:0.5px solid #DDDDDD">Win:${win}</div>'

  }}
    shapeSettings={ {
    colorValuePath: 'rank',
    colorMapping: [
      {
        value: '1',
        color: '#b3daff'
      },
      { 
        value: '2',
        color: '#80c1ff'     
      },
      {
        value: '3',
        color: '#1a90ff'          
      },
      {
        value: '7',
        color: '#005cb3'     
      }],
        fill: '#E5E5E5'
} }
>
  </LayerDirective>
</LayersDirective>
</MapsComponent>
</div>
  );
}

export default App;
