import uad from '../../database/json/fato/uad.json'
import db from '../../database/json/fato/db.json'

const Container = () => {

    const rever = uad.coordenada.reverse();

    return (
        <>
            <span>Aréa de Estudo</span>
            
            {console.log(rever)}
        </>
    );
}

export default Container;