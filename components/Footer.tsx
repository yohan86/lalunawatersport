import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Profile */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
            <div className="relative w-20 h-20">
                <Image src="/laluna-logo.png" alt="La Luna Logo" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-black text-white tracking-wider uppercase">
              La Luna<span className="text-cyan-400">.</span>
            </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Bentota’s premier river and deep-sea adventure hub. Offering 18+ high-octane water sports and luxury safaris under international safety standards.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 mt-2">
              {[
                { icon: <FaFacebookF size={14} />, href: 'https://facebook.com' },
                { icon: <FaInstagram size={14} />, href: 'https://instagram.com' },
                { icon: <FaYoutube size={14} />, href: 'https://youtube.com' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Activities) */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">
              Our Activities
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold">
              {[
                { name: 'Jet Ski Rentals', href: '#services' },
                { name: 'Fly Fish Thrill Ride', href: '#services' },
                { name: 'Deep Sea Diving', href: '#services' },
                { name: 'Mangrove River Boat Trip', href: '#services' },
                { name: 'Adventure Combo Packs', href: '#packages' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Operations */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">
              Operating Hours
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex flex-col gap-0.5">
                <span className="text-slate-500 text-xs font-bold uppercase">Monday – Sunday</span>
                <span className="text-white font-semibold">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-slate-500 text-xs font-bold uppercase">Weather Conditions</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open & Safe for Rides
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-500 mt-1 shrink-0" size={16} />
                <span className="leading-relaxed">
                  La Luna Water Sports Center, Aluthgama, Bentota, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-500 shrink-0" size={14} />
                <a href="tel:+94771234567" className="hover:text-white transition-colors">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-500 shrink-0" size={14} />
                <a href="mailto:info@lalunabentota.com" className="hover:text-white transition-colors">
                  info@lalunabentota.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-wide uppercase text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} La Luna Water Sports Bentota. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}