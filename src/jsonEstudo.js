import jsonDataEstudo from './database/jsonEstudo.json';

export default function jsonEstudo() {
    return (
        <>
            {jsonDataEstudo.db.map((json, k) => {
                return (
                    <p>
                        {json.polygono}
                        <br />
                        <p>
                            {json.color}
                        </p>
                    </p>
                );
            })}
        </>
    )
}