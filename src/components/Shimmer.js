const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-15 p-6 mt-30">
            {Array(8).fill().map((_, index) => (
                <div 
                    key={index} 
                    className="relative w-[310px] sm:w-[300px] md:w-[300px] lg:w-[310px] lg:h-[420px] bg-gray-200 rounded-2xl p-6 flex flex-col animate-pulse"
                >
                    {/* Image Section */}
                    <div className="w-full h-56 bg-gray-300 rounded-2xl"></div>

                    {/* Content Section */}
                    <div className="mt-4 flex-1 flex flex-col space-y-2">
                        <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
                        <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>

                        {/* Ratings and Cost Section */}
                        <div className="flex items-center gap-3 mt-3">
                            <div className="h-6 w-12 bg-gray-300 rounded-lg"></div>
                            <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                        </div>

                        {/* Delivery Time */}
                        <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
