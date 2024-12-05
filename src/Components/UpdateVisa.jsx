import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateVisa = () => {
const coffee=useLoaderData()
const{_id,name,supplier,chef,photo,taste,category,details}=coffee
const handleUpdateCoffee =event=>{
    event.preventDefault()
    const form=event.target

    const name=form.name.value
    const chef=form.chef.value
    const supplier=form.supplier.value
    const taste=form.taste.value
    const category=form.category.value
    const details=form.details.value
    const photo=form.photo.value
    const UpdatedCoffee={name,chef,supplier,taste,category,details,photo}
    console.log(UpdatedCoffee);

    // send data to server for update data
    fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify( UpdatedCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){

            Swal.fire({
                title: 'success',
                text: 'Update Coffee Successfully',
                icon: 'success',
                confirmButtonText: 'back'
              })

        }
    })





}
return (
    <div className=" items-center">
  <Link to="/">  <button className="btn">----Back to home</button></Link>
        <form onSubmit={handleUpdateCoffee} >
        
<div className=" items-center w-full bg-red-50 mx-auto container  ">
<div className=" mt-20">
<h1 className="text-center text-3xl font-extrabold ">Update Coffee</h1>
<p className="text-center text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, exercitationem?</p>
</div>
<div className="w-4/6 mx-auto">
<div className="grid grid-cols-2 gap-2">

<div>
<p>Name</p>
<label className="input input-bordered flex items-center gap-2">

<input type="text" name="name" defaultValue={name} className="grow" placeholder="Enter coffee name" />
</label>
</div>
<div >
<p>Chef</p>
<label className="input input-bordered flex items-center gap-2">

<input type="text" name="chef" defaultValue={chef} className="grow" placeholder="Enter coffee chef" />
</label>
</div>
<div >
<>Supplier</>
<label className="input input-bordered flex items-center gap-2">
<input type="text" name="supplier" defaultValue={supplier} className="grow" placeholder="Enter coffee supplier" />
</label>
</div>
<div>
<h3>Tast</h3>
<label className="input input-bordered flex items-center gap-2">
<input type="text" name="taste" defaultValue={taste} className="grow" placeholder="Enter coffee taste" />
</label>
</div>
<div >
<p>Category</p>
<label className="input input-bordered flex items-center gap-2">

<input type="text" name="category" defaultValue={category} className="grow" placeholder="Enter coffee category" />
</label>
</div>
<div >
<p>Details</p>
<label className="input input-bordered flex items-center gap-2">
<input type="text" name="details" defaultValue={details} className="grow" placeholder="Enter Coffee Details" />
</label>
</div>
</div>
<div>
<p>Photo</p>
<label className="input input-bordered flex items-center gap-2">

<input type="text" name="photo" defaultValue={photo} className="grow" placeholder="Photo Url" />
</label>
</div>
<div>
<input className="btn bg-[#d2b48c] w-full border mt-5 " type="submit" value="Update coffee" name="" id="" />
</div>
</div>
</div>

        </form>
    </div>
);
};

export default UpdateVisa;