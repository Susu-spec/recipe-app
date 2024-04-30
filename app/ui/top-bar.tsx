import NavLinks from '@/app/ui/nav-links'

export default function TopNav() {
    return (
        <div className='w-100'>
            <div className="mx-0 my-auto flex flex-row justify-between space-x-2 items-center md:space-x-0 md:space-y-2">
                <NavLinks />
                {/* <form>
                    <button>
                        <div>Sign In</div>
                    </button>
                </form> */}
            </div>
        </div>
    )
}