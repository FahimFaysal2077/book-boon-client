import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = (data, e) => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            price: data.price,
            image: imageURL
        };
        const url = `https://warm-badlands-03887.herokuapp.com/addBook`
        console.log(bookData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-types': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => {
                console.log('server side response', res)
                e.target.reset()
            })
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0069b2d641d6702c507985600c84134f');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <div classnames="m-5">
                <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="bookName">Book Name</label>
                        <br/>
                        <input name="bookName" placeholder="Enter Name" ref={register} type="text" ClassName="form-control" id="bookName" required />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="authorName">Author Name</label>
                        <br/>
                        <input name="authorName" placeholder="Enter Author Name" ref={register} type="text" ClassName="form-control" id="authorName" required />
                    </div>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="price">Add Price</label>
                        <br/>
                        <input name="price" placeholder="Price" ref={register} type="text" ClassName="form-control" id="price" required />
                    </div>
                    <div className="form-group mt-4">
                        <label for="exampleFormControlFile1">Add Book Cover Photo</label>
                        <input type="file" className="form-control-file" onChange={handleImageUpload} id="exampleFormControlFile1" required />
                    </div>
                </form>
            </div>
            <div className="add-book-btn">
                <input  type="submit" className="col-md-1 add-book-btn-input" />
            </div>

        </div>
    );
};

export default AddBook;