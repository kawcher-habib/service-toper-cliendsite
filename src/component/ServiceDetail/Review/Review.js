import React from 'react';

const Review = () => {
    return (
        <div className="row bg-light p-3">
            <div className="col-md-7">
                <h2>Review</h2>
                <form>
                    <div class="form-group mt-2">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Company's Name" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-5">

            </div>
        </div>
    );
};

export default Review;