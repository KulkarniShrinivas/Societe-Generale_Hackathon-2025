import "./socialMedia.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { whatsappData } from "@/lib/whatsapp";
import Link from "next/link";

type Props = {
    whatsapp?: string;
    fb?: string;
    insta: string;
}

const SocialMedia = ({ whatsapp, fb, insta }: Props) => {
  return (
    <div className="social-buttons">
      <Link
        onClick={() => whatsappData()}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button github"
        href={""}
      >
        <WhatsAppIcon />
      </Link>
      {/* <a
        href={fb}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button facebook"
      >
        <FacebookIcon />
      </a> */}
      <Link
        href={insta}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button instagram"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
};

export default SocialMedia;
