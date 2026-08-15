import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/profile.php?id=61591600229584',
    icon: <FaFacebookF size={14} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lalunawatersportscenter/',
    icon: <FaInstagram size={14} />,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@LaLunaWaterSportsCenter',
    icon: <FaYoutube size={14} />,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-2 mt-5">
        {socialMediaLinks.map((social, idx) => (
            <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-site-green flex items-center justify-center text-white hover:text-gray-400 transition-all duration-300"
            >
            {social.icon}
        </a>
        ))}
    </div>
  )
}

export default SocialMedia