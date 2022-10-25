import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const { countIncrease, gun } = props;
    const [modalData, setModalData] = useState({})
    const { action, bullet, img, name, price, capacity, category, } = gun;
    return (
        <div>

            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-60' alt='' src={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>

                    </div>
                    <div className='mt-5'>
                        <button onClick={() => countIncrease()} class="btn btn-sm btn-primary mr-3">Add to card</button>
                        {/*  <button class="btn btn-sm btn-accent">Details</button> */}
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className=" modal-button btn btn-sm btn-accent">open modal</label>
                    </div>
                </div>
            </div>
            {
                modalData && (<Modal data={modalData} setModalData={setModalData} ></Modal>)
            }
        </div>
    );
};

export default SingleGun;