import { Popup } from 'react-leaflet'

const popupComponent = ({ uad, municipio, arrecadado, debitado, faturado, color }) => {
    return (
        <Popup>
            <img 
                style={{'width': '100%'}}
                src='https://www.cagece.com.br/wp-content/uploads/2021/06/MarcaCagece50-topo.png'/>
            <h3 style={{'color': color}}>Unidade de Negócio: {uad}</h3>
            <h3 style={{'color': color}}>Municipio: R$ {municipio}</h3>
            <h3 style={{'color': color}}>Arrecadado: R$ {arrecadado}</h3>
            <h3 style={{'color': color}}>Debitado: R$ {debitado}</h3>
            <h3 style={{'color': color}}>Faturado: R$ {faturado}</h3>
        </Popup>
    )
};

export default popupComponent;