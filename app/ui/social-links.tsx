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

  export default function SocialLinks() {
    return(
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
    )
}