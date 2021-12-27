import { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet'

// JSON imports

import uad from './database/json/dimensao/uad.json';
import db from './database/json/fato/db.json';

import jsonteste from './database/json/fato/jsonteste.json'

// COMPONENTS imports

import Popup from './components/Popup';

const App = () => {

  const [selectedUad , setSelectedUad] = useState('TODOS');

  return (
    <>

      <span>Unidade de Negócio: </span>
      <select
        value={selectedUad}
        onChange={e => setSelectedUad(e.target.value)}
      >
        {uad.uad.map(comp => {
          return (
            <option
              key={comp.srk} 
              value={comp.uad}
            > 
              {comp.uad} 
            </option>
          )
        })}
      </select>

      <MapContainer
        center={[-5.1991852,-39.4109497]}
        zoom={7}
        scrollWheelZoom={true}
        style={{'height': '97vh', 'width': '100%', 'borderRadius': '5px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        
         {db.db.filter(uad => uad.uad === (selectedUad === 'TODOS' ? uad.uad : selectedUad)).map(uad => {
          return (
            <Polygon
              key={uad.uad}
              color={uad.color}
              positions={[uad.polygono]}>
                <Popup 
                  uad={uad.uad} 
                  municipio={uad.municipio}
                  faturado={uad.vlr_faturado}
                  debitado={uad.vlr_debitado}
                  arrecadado={uad.vlr_arrecadado}
                  color={uad.color}
                />
            </Polygon>
          )
        })} 

       {/* {jsonteste.vw_une_unidade_negocio_geoserver.map(j => {
          return (
            <Polygon
              positions={j.coordenada}>
                <Popup 
                  uad={uad.uad} 
                  municipio={uad.municipio}
                  faturado={uad.vlr_faturado}
                  debitado={uad.vlr_debitado}
                  arrecadado={uad.vlr_arrecadado}
                  color={uad.color}
                /> 
            </Polygon>
          )
        })} */}

      </MapContainer>
    </>
  )
};

export default App;