const Intro1 = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row bg-red-50/50">
            <img
            className="h-[70vh]"
            //  src="https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             src="https://images.unsplash.com/photo-1516495312540-a148643b22d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="" />
             <div className="p-4 lg:py-12 lg:px-6">
                <h2 className="text-3xl text-red-900 py-2">A Heritage of Hospitality, Now on Seas</h2>
                <p className="text-gray-600">
                    Our long history of warm hospitality and elegance now extends to the seas.
                Experience the epitome of refinement as you indulge in exquisite dining, lavish accommodations, and 
                personalized service. 
                Explore hidden coves, bask in the sun on spacious decks, and immerse yourself in the beauty of the open sea. 
                All that en route to your favorite destinations.
                </p>
                <p>
                    <button className="underline py-3 text-gray-600">About Us</button>
                </p>
             </div>
        </div>
    );
};

export default Intro1;