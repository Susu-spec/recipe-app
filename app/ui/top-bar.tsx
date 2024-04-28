import NavLinks from '@/app/ui/nav-links'

export default function TopNav() {
    return (
        <div className='w-100'>
            {/* <div>
                <Link href="/login"></Link>
            </div> */}
            <div className="mx-0 my-auto flex flex-row justify-between space-x-2 items-center md:space-x-0 md:space-y-2">
                <NavLinks />
                {/* <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div> */}
                <form>
                    <button>
                        <div>Sign In</div>
                    </button>
                </form>
            </div>
        </div>
    )
}