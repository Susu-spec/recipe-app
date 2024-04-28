
import { styleScript } from "@/app/ui/fonts";
import NavLinks from '@/app/ui/nav-links';
import SocialLinks from "@/app/ui/social-links";

export default function Footer() {
    return (
        <footer className="text-white py-20 bg_gradient">
            <div className="container mx-auto px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t">
                <p className={`flex flex-col flex-wrap font-bold text-left mx-auto my-0 text-3xl antialiased ${styleScript.className}`}>Edmama's Recipes</p>
                <div className=''>
                    <p>QUICK LINKS</p>
                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        <NavLinks />
                    </div>
                    <div className='flex flex-col'>
                        <p>SOCIAL MEDIA</p>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    )
}