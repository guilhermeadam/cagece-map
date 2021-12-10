import './styles/leaflet.css';
import cageceJson from './database/cagece.json';
import cagecePolygonos from './database/polygonos.json';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon  } from 'react-leaflet'


function App() {

  const cagece = [-3.771, -38.53];
  const multiPolyline1Color = { color: 'red' }
  const multiPolyline2Color = { color: 'black' }
  const multiPolyline3Color = { color: 'orange' }

  const multiPolyline1 = [
    [
      [-3.771, -38.53],
      [-3.779, -38.541],
      [-3.771, -38.553],
    ]
  ]

  const multiPolyline2 = [
    [
      [-3.781, -38.63],
      [-3.789, -38.641],
      [-3.781, -38.653],
    ]
  ]

  const multiPolyline3 = [
    [
      [-3.791, -38.645],
      [-3.798, -38.659],
      [-3.810, -38.639],
    ]
  ]

  return (
    <div className="App">

      <MapContainer center={cagece} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon 
          positions={multiPolyline1}
          pathOptions={multiPolyline1Color}
        >
          <Popup>
            <h3>Unidade de Negócio: <h2 style={{'color': 'green'}}>UN-BSI</h2></h3>
            <h3>
              Valor Faturado: <h2 style={{'color': 'red'}}>R$ 65.987,12</h2>
            </h3>
            <h3>
              Valor Arrecadado: <h2 style={{'color': 'blue'}}>R$ 91.987,12</h2>
            </h3>
            <h3>
              Valor Debitado: <h2 style={{'color': 'orange'}}>R$ 31.987,12</h2>
            </h3>
          </Popup>
        </Polygon>

        <Polygon 
          positions={multiPolyline2}
          pathOptions={multiPolyline2Color}
        >
          <Popup>
            <h3>Unidade de Negócio: <h2 style={{'color': 'green'}}>UN-MTS</h2></h3>
            <h3>
              Valor Faturado: <h2 style={{'color': 'red'}}>R$ 15.987,12</h2>
            </h3>
            <h3>
              Valor Arrecadado: <h2 style={{'color': 'blue'}}>R$ 1.987,12</h2>
            </h3>
            <h3>
              Valor Debitado: <h2 style={{'color': 'orange'}}>R$ 31.987,12</h2>
            </h3>
          </Popup>
        </Polygon>

        <Polygon 
          positions={multiPolyline3}
          pathOptions={multiPolyline3Color}
        >
          <Popup>
            <h3>Unidade de Negócio: <h2 style={{'color': 'green'}}>UN-BAC</h2></h3>
            <h3>
              Valor Faturado: <h2 style={{'color': 'red'}}>R$ 5.987,12</h2>
            </h3>
            <h3>
              Valor Arrecadado: <h2 style={{'color': 'blue'}}>R$ 1.987,12</h2>
            </h3>
            <h3>
              Valor Debitado: <h2 style={{'color': 'orange'}}>R$ 1.987,12</h2>
            </h3>
          </Popup>
        </Polygon>

      </MapContainer>
    </div>
  );
}

export default App;
