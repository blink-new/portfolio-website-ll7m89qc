
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">STUDIO</h3>
            <p className="text-gray-400 max-w-xs">
              Creating exceptional digital experiences through modern design and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>hello@studio.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Design Street, NY 10001</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2024 Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}