import React from 'react';

const SingleGun = (props) => {
    const { countIncrease } = props;

    const { action, bullet, img, name, price, capacity, category, } = props.gun;
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
                        <button class="btn btn-sm btn-accent">Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
}; 

export default SingleGun;