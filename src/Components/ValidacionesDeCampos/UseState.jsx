import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    // console.log(value)
    React.useEffect(() => {
        
        if (loading) {
            setTimeout(()=> {

                if(value === SECURITY_CODE) { 
                    setLoading(false);
                } else {
                    setLoading(false);
                    setError(true);
                }

            }, 3000);
        }

    }, [loading]);

    return (
        <div>
            <h2>Eliminar { name } </h2>

            <p>Por favor, escribe el código de seguridad.</p>

            {(error && !loading) && (
                <p>Error: el código es incorrecto.</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}

            <input 
                placeholder='Codigo de Seguridad'
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
            <button
                onClick={() => { 
                    setError(false);
                    setLoading(true);
                }}
            >Comprobar</button>
        </div>
    );
}

export { UseState };