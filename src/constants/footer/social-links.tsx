import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { FacebookIcon } from "../../components/icons/FacebookIcon";
import { InstagramIconDark } from "../../components/icons/InstagramIconDark";
import { XformerlyTwitter } from "@/components/icons/XIconDark";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

type SocialLinkTypes = {
    name : string;
    link : string;
    icon : React.ReactNode;
}


export const socialLinks : SocialLinkTypes[] = [
    {
        name: "Facebook",
        link: "https://www.facebook.com/xolaceinc",
        icon: <FacebookIcon className="h-5 w-5" />
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/xolaceinc",
        icon: <InstagramIconDark className="h-5 w-5" />
    },
    {
        name: "Twitter",
        link: "https://www.x.com/xolaceinc",
        icon: <XformerlyTwitter className="h-5 w-5" />
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/xolaceinc",
        icon: <LinkedInIcon className="h-5 w-5" />
    }
]
