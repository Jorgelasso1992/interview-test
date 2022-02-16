import React, { useState } from 'react';
import Axios from 'axios';

export default function FormCars() {

    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [license, setLicense] = useState('');

    const register = async (e) => {
        e.preventDefault()
        const token = sessionStorage.getItem('token')
        const user = { brand, color, license, userName: sessionStorage.getItem('idUser') }
        if (brand === "" || color === "" || license === "") {
            alert("Empty fields are not allowed")
        }
        const response = await Axios.post('./cars/create', user, { headers: { 'autorization': token } })
        console.log(response)
        const message = response.data.message

        if (message !== 'Car created') {
            alert(message);
        } else {
            alert(message);
            window.location.href = '/viewCar'
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7  mx-auto">
                    <div className="card">
                        <div className="container text-center fa-5x">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="card-header bg-info text-center">
                            <h4>Register Car</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={"guardar"} >
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Brand</label>
                                        <input required type="text" className="form-control" onChange={(e) => setBrand(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label>Color</label>
                                        <input required type="text" className="form-control" onChange={(e) => setColor(e.target.value)} />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label>License plates</label>
                                        <input required type="text" className="form-control" onChange={(e) => setLicense(e.target.value)} />
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-outline-info mt-4" onClick={register}>
                                    <span class="fa fa-save"></span> Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
