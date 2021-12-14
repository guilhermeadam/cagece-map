import './styles/leaflet.css';
import { MapContainer, TileLayer, Popup, Polygon, Marker } from 'react-leaflet'
import jsonDataEstudo from './database/jsonEstudo.json';

function App() {

  return (
    <>

      <MapContainer 
          center={[-3.6931705133295423, -39.18431694826951]} 
          zoom={10} 
          scrollWheelZoom={true}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {jsonDataEstudo.db.map((loc, k) => {
          return (
            <Polygon
              key={k}
              positions={[loc.polygono]}
              color={loc.color}
            >

              <Popup>
                <h3>
                  Unidade de Negócio: <h2 style={{ 'color': loc.color }}>
                    {loc.uad}
                  </h2>
                </h3>
                <h3>
                  Valor Faturado: 
                  <h2 style={{ 'color': loc.color }}>
                    R$ {loc.vlr_faturado}
                  </h2>
                </h3>
                <h3>
                  Valor Arrecadado: 
                    <h2 style={{ 'color': loc.color }}>
                      R$ {loc.vlr_arrecadado}
                    </h2>
                </h3>
                <h3>
                  Valor Debitado: 
                    <h2 style={{ 'color': loc.color }}>
                      R$ {loc.vlr_debitado}
                    </h2>
                </h3>
                <button 
                  style={{ fontSize: '16px', borderRadius: '3px', padding: '5px', fontFamily: 'sans-serif' }} 
                  onClick={() => alert(`Você clicou na ${loc.uad}`)}
                >
                  Aperte aqui para saber a UAD.
                </button>
              </Popup>

            </Polygon>
          )
        })}

      </MapContainer>

    </>
  );
}

export default App;
