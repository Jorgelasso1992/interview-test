import React, { useState } from 'react';
import Axios from 'axios';
import MaterialTable from 'material-table'
import { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function ViewCars() {

    const [brand, setBrand] = useState('')
    const [color, setColor] = useState('')
    const [license, setLicense] = useState('')
    const [cars, setCars] = useState([]);
    const [idCar, setIdCar] = useState('');

    const [showUpdate, setShowUpdate] = useState(false);
    const handleClose = () => setShowUpdate(false);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        const id = sessionStorage.getItem('idUser');
        const token = sessionStorage.getItem('token');
        const response = await Axios.get('/cars/listCarsUser/' + id, {
            headers: { 'autorization': token }
        });

        console.log(response);
        setCars(response.data);
    }

    const data = cars.map((car) => ({
        id: car._id,
        brand: car.brand,
        color: car.color,
        license: car.license
    }))


    //-------------

    const getCar = async (idParameter) => {
        setShowUpdate(true);

        const id = idParameter;
        const token = sessionStorage.getItem('token');
        const response = await Axios.get('/cars/list/' + id, {
            headers: { 'autorization': token }
        });

        console.log(response.data);

        setIdCar(response.data._id);
        setBrand(response.data.brand);
        setColor(response.data.color);
        setLicense(response.data.license);
    }

    //-------------

    const update = async (e) => {
        e.preventDefault();
        const id = idCar;
        const token = sessionStorage.getItem('token');
        const car = {
            brand,
            color,
            license
        };

        const response = await Axios.put('/cars/update/' + id, car, {
            headers: { 'autorization': token }
        });

        const message = response.data.message;

        getCars();

        alert(message);

        setShowUpdate(false);
    }

    //-------------

    const deleteCar = async (id) => {
        const token = sessionStorage.getItem('token');

        const response = await Axios.delete('/cars/delete/' + id, {
            headers: { 'autorization': token }
        });

        const message = response.data.message;

        alert(message);

        getCars();

    }

    return (
        <div className='container mt-5'>
            <MaterialTable
                title={"Cars of " + sessionStorage.getItem('name')}
                columns={[
                    { title: 'Brand', field: 'brand' },
                    { title: 'Color', field: 'color' },
                    { title: 'License Plate', field: 'license' },
                ]}
                data={data}
                options={{
                    search: true,
                    actionsColumnIndex: -1,
                    initialPage: 1
                }}
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Delete',
                        onClick: (event, rowData) => deleteCar(rowData.id)
                    },

                    {
                        icon: 'edit',
                        tooltip: 'Edit',
                        onClick: (event, rowData) => getCar(rowData.id)
                    },
                ]}
            />
            <Modal show={showUpdate} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form >
                        <Form.Group className="mb-3" controlId="formBrand">
                            <Form.Label className="formModal">Brand</Form.Label>
                            <Form.Control type="text" onChange={(e) => setBrand(e.target.value)} value={brand} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formColor" >
                            <Form.Label className="formModal">Color</Form.Label>
                            <Form.Control type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLicense">
                            <Form.Label className="formModal">License Plate</Form.Label>
                            <Form.Control type="text" onChange={(e) => setLicense(e.target.value)} value={license} />
                        </Form.Group>
                    </Form>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={update}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal.Body>

            </Modal>
        </div>
    );
}
