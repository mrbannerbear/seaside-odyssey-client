const Banner = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center"
        style={{backgroundImage: 
            // `url("https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            // `url("https://images.unsplash.com/photo-1556224542-250166cc2285?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            // `url("https://images.unsplash.com/photo-1559599746-8823b38544c6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
       `url("https://images.unsplash.com/photo-1551032960-dc7aa65c411f?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
        }}
        >
  
         <div className="min-h-screen bg-gradient-to-t from-black/70 via-transparent to-transparent absolute w-full h-full"></div>
         <div className="text-red-50 relative text-center px-4">
          <h1 className="text-4xl md:text-5xl mb-2">
          Escape to Serenity
          </h1>
      <p>
      Luxury Cruise Adventures with Seaside Odyssey
      </p>
         </div>
        </div>
    );
};

export default Banner;