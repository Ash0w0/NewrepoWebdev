import { Code2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">WebDevSolutions</span>
            </div>
            <p className="text-muted-foreground">
              Connecting global businesses with India's top tech talent.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-muted-foreground hover:text-primary">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-primary">
                  Join As Developer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Frontend Development</li>
              <li className="text-muted-foreground">Backend Development</li>
              <li className="text-muted-foreground">DevOps Engineering</li>
              <li className="text-muted-foreground">Quality Assurance</li>
              <li className="text-muted-foreground">Business Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@webdevelopmentsolutions.in" className="text-muted-foreground hover:text-primary">
                  contact@webdevelopmentsolutions.in
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 XXXXXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Web Development Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}