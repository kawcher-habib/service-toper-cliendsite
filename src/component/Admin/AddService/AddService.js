import React from 'react';

const AddService = ({ serviceValue }) => {
    console.log(serviceValue)
    const submitHandler = (e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers : {
             'Content-type': 'application/json; charset=UTF-8',
            },
           body: JSON.stringify(serviceValue)
        })
        console.log('this is working')
    }
    return (
        <div>
            
            <form  className="mt-3">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Service Name" />
                    </div>
                    <div className="form-group">
                        <input type="file" className="form-control" placeholder="Service Icon" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-info">AddService</button>
                </form>
        </div>
    );
};

export default AddService;