const ShimmerMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Stacked Spans in Center */}
      <span className="h-8 w-20 bg-gray-200 rounded-md mb-3"></span>
      <span className="h-8 w-30 bg-gray-200 rounded-md"></span>

      {/* Shimmer Menu Items */}
      <div className="w-6/12 mt-6">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div key={index} className="bg-gray-50 shadow-lg p-4 mb-4 animate-pulse">
              <div className="flex justify-between cursor-pointer">
                <div className="h-6 w-40 bg-gray-300 rounded-md"></div>
                <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;


  