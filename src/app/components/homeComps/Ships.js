const Ships = () => {
    return (
        <div className="min-h-screen bg-red-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-3 px-12 pt-6 pb-12 gap-5">
            <div>
                <img src="https://images.unsplash.com/photo-1617170788899-ef9587d6e63f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="flex flex-col justify-center">
            <h2 className="text-center text-3xl text-red-900">Meet Our Ships</h2>
            <p className="text-gray-600 text-center pt-4 lg:pt-6">
            Welcome to our exquisite fleet, where luxury meets adventure on the high seas. 
            Step aboard and experience the epitome of maritime elegance and comfort. 
            </p>
            <p className="pt-4 lg:pt-6 flex justify-center">
                <button className="text-red-900 underline">Explore Ships</button>
            </p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1563829904222-2c743e614282?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
        </div>
    );
};

export default Ships;