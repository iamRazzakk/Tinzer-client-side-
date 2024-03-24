

const AppointMent = () => {
    return (
        <div className="text-primary">
            <form className="card-body lg:px-28 lg:space-y-6 min-h-full">
                < div className="form-control" >

                    <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white " required />
                </div >
                < div className="form-control" >

                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white " required />
                </div >
                <div className="form-control">

                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white " required />
                </div>
                
            </form >
        </div>
    );
};

export default AppointMent;