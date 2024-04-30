
import { styleScript } from "@/app/ui/fonts";
import NavLinks from '@/app/ui/nav-links';
import { 
    FacebookShareButton, 
    FacebookIcon, 
    InstapaperShareButton, 
    InstapaperIcon, 
    EmailShareButton, 
    EmailIcon, 
    WhatsappShareButton, 
    WhatsappIcon, 
    TwitterShareButton, 
    TwitterIcon, 
  } from 'next-share'; 
  import { Button } from "@nextui-org/button";

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
                        <div className='flex flex-col mt-4 gap-3'>
                            <FacebookShareButton url={''}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <WhatsappShareButton url={''}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            <TwitterShareButton url={''}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <EmailShareButton url={''}>
                                <EmailIcon size={32} round />
                            </EmailShareButton>
                            <InstapaperShareButton url={''}>
                                <InstapaperIcon size={32} round />
                            </InstapaperShareButton>
                            <Button title='Sign up' className='mt-10 md-block bg-transparent border border-white text-white hover:text-black rounded-md min-w-[130px]'>
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}