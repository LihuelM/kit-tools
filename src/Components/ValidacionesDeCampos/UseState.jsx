import React from 'react';
import './Validcion.css';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
    const [state, setState] = React.useState({
        value:'',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    console.log(state)

    React.useEffect(() => {  
        if (state.loading) {
            setTimeout(()=> {

                if(state.value === SECURITY_CODE) { 
                    setState({
                        ...state,
                        error: false, 
                        loading: false,
                        confirmed: true,
                    });
                    // setLoading(false);
                } else {
                    setState({
                        ...state,
                        error: true, 
                        loading: false,
                    });
                    // setLoading(false);
                    // setError(true);
                }

            }, 3000);
        }

    }, [state.loading]);

    if (!state.deleted && !state.confirmed) {
        return (
            <div className='container-useState'>
                <h2>Eliminar { name } </h2>
                <p>Por favor, escribe el código de seguridad para comprobr que quieres eliminar.</p>

                {(state.error && !state.loading) && (
                    <p className='text-error'>Error: el código es incorrecto.</p>
                )}
                {state.loading && (
                    <p>Cargando...</p>
                )}
    
                <div className='input-button'>
                    <input 
                        placeholder='Codigo de Seguridad'
                        value={state.value}
                        onChange={(event) => {
                            setState({
                                ...state,
                                value: event.target.value,
                            });
                            // setValue(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => { 
                            setState({
                                ...state,
                                loading: true,
                            });
                            // setError(false);
                            // setLoading(true);
                        }}
                    >Comprobar</button>
                </div>
            </div>
        );
    } else if (!state.deleted && state.confirmed) {
        return (
            <React.Fragment>
                <p>Pedimos confirmacion. Estas seguro?</p>
                <div className='input-button'>
                    <button
                        onClick={() => {
                            setState({
                                ...state,
                                deleted: true,
                            });
                        }}
                    >Si, eliminar</button>
                    <button
                        onClick={() => {
                            setState({
                                ...state,
                                confirmed: false,
                                value: '',
                            });
                        }}
                    >No, gracias</button>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con Exito!</p>
                <button
                        onClick={() => {
                            setState({
                                ...state,
                                confirmed: false,
                                deleted: false,
                                value: '',
                            });
                        }}
                    >Volver atrás</button>
            </React.Fragment>
        );
    }
}

export { UseState };