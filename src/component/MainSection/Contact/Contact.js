import React from 'react';

const Contact = () => {
    return (
        <div className="bg-dark mt-2 mb-3 p-4">
            <h2 className="text-center text-white">Contact Us</h2>
            <div className="container p-2">
            <div className="row">
                <div className="col-md-2 col-ms-12"></div>
                <div className="col-md-8 col-ms-12 shadow p-2">
                    <form>
                        <div class="form-group">

                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                        </div>
                        <div class="form-group">

                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Email" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Enter Your Massage"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-2 col-ms-12"></div>
            </div>
        </div>
    </div>
    );
};

export default Contact;