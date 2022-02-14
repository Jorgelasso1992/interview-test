import React from 'react'

export default function formCars() {
    return (
        <div className="container mt-4">
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
                                        <input type="text" className="form-control required" />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label>Color</label>
                                        <input type="text" className="form-control required" />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label>License plates</label>
                                        <input type="text" className="form-control required" />
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-outline-info mt-4">
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
