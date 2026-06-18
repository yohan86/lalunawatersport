import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}
const Button = ({ href, children, fullWidth }: ButtonProps) => {
  return (
    <div>
        <Link href={href} className={`btn primary-button w-full justify-center text-center gap-2 hover:gap-4 ${fullWidth ? "w-full" : "w-auto" }`}>
          <span>{children}</span><FaArrowRightLong size={15} className="mt-[5px]" />
        </Link>
    </div>
  )
}

export default Button