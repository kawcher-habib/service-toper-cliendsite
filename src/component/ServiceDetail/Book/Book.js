import React from 'react';

const Book = () => {
    return (
        <div className="row bg-light p-3">
            <div className="col-md-7">
                <h2>Book</h2>
                <form className="mt-3">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control"  placeholder="Enter Email" />
                    </div>
                    <h6>Pay With</h6>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            Creadit Card
                            </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            Paypal
                            </label>
                    </div>
                    <div className="form-group mt-3">
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Card Number" />
                    </div>
                    <div className="form-group d-flex">
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <input type="number" className="form-control ml-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CVC" />
                    </div>
                    <button type="submit" className="btn btn-info">Pay</button>
                </form>
            </div>
            <div className="col-md-5">

            </div>

        </div>
    );
};

export default Book;