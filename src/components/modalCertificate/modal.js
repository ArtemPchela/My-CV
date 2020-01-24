import React from 'react';
import './modal.css';
import Certificate from './certificate.jpg';


const butOpen = {
    marginBottom: '5px',
    padding: '9px 25px',
    background: '#bdbdbd',
    borderRadius: '8px',
    outline: 'none',
    display: 'flex',
    cursor: 'pointer',
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
    border: 'none'
};

const butClose = {
    background: 'rgba(0, 0, 0, .15)',
    opacity: '0.7',
    borderRadius: '8px',
    marginTop: '20px',
    outline: 'none',
    padding: '5px',
    cursor: 'pointer',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    border: 'none',
};

export default class Modal extends React.Component {
    state = {
        isOpen: false
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})} style={butOpen} className='butModal'>
                    My certificate you may see here
                </button>

                {this.state.isOpen && (
                    <div className="modal-certificate">
                        <div className="modal-body-certificate">
                            <div className='modal-body-img'>
                                <img src={Certificate} alt="Certificate" id='certificate'/><br/>
                                <button onClick={() => this.setState({isOpen: false})} style={butClose}
                                        className='butModal'>
                                    Close me
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

