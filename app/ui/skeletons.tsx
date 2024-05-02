const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function RecipeSkeleton() {
    return(
            <div className= {`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
          >
            <div className="w-full">
              <div className="flex flex-col items-center justify-center">
                  <div className="w-full flex flex-wrap justify-center items-center gap-10 px-0 lg:px-10 py-10">
              </div>
                <div className="flex grow h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <div></div>
                </div>
              </div>
          </div>
      </div>
    )
}

export function RecipeCardSkeleton() {
  return (
    <div className={`mx-auto my-0 rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] bg-gradient-to-r from-stone-700 to-gray-400 text-xs capitalize text-shadow text-black ${shimmer}`}>
                <div className="h-6 w-5 mt-1 p-2">
                </div>
                <div className="h-5 w-16 w-full py-2 flex justfy-between items-center">
                    <span className="px-2 pt-1 rounded-full mr-3 text-yellow-500">
                    </span>
                    <span className="px-2 pt-1 rounded-full mr-3 text-yellow-500">
                    </span>
                </div>
                
            </div>
  )
}