const Newsletter = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse pt-6 pb-12 gap-5 bg-red-50/50 justify-center items-center"
        >
            <img className="h-[400px]"
            src="https://images.unsplash.com/photo-1657044789125-f13075e31262?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div>
            <h2 className="text-center lg:text-right text-3xl text-red-900">Get All Our Updates</h2>
            <h2 className="text-center lg:text-right text-xl text-red-900">Join the Newsletter</h2>
            <form className="py-4">
                <input type="email" name="" id="" className="border-[1.5px] border-red-900 px-2 py-2" placeholder="Email Address"/>
                <input type="button" value="Subscribe" className="text-red-50 border-[1.5px] border-red-900 bg-red-900 px-2 py-2"/>
            </form>
            </div>
        </div>
    );
};

export default Newsletter;