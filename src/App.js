import './styles/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet'


function App() {

  const cagece = [-3.771669,-38.5373133]


  const blackOptions = { color: 'black' }

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  return (
    <div className="App">
      <MapContainer center={cagece} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={cagece}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Rectangle 
          bounds={rectangle} 
          pathOptions={blackOptions}
          
        />
      </MapContainer>
    </div>
  );
}

export default App;