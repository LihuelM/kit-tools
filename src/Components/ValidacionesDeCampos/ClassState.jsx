import React from 'react';
import { Loading } from './Loading';
import './Validcion.css';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: false,
            loading: false,
        };
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate");

        if (this.state.loading) {
            setTimeout(()=> {
                if(SECURITY_CODE === this.state.value) {
                    this.setState({ error: false, loading: false });
                } else {
                    this.setState({ error: true, loading: false });
                }
            }, 3000);
        }
    }

    render() {
        return (
            <div className='container-classState'>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad para comprobr que quieres eliminar.</p>

                {(this.state.error && !this.state.loading) && (
                <p className='text-error'>Error: el código es incorrecto.</p>
                )}

                {this.state.loading && (
                <Loading />
                )}

                <div className='input-button'>
                    <input 
                        placeholder='Codigo de Seguridad'
                        value={this.state.value}
                        onChange={(event) => {
                            this.setState({ value: event.target.value });
                        }}
                    />
                    <button
                        onClick={() => this.setState({ loading: true })}
                    >Comprobar</button>
                </div>
                
            </div>
        );
    }
}

export { ClassState };
