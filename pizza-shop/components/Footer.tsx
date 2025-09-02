import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  Pizza,
  MapPin,
  Phone,
  Clock,
  Heart,
  CreditCard,
  Shield,
  Truck,
  Award,
  Pocket,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative bg-background text-foreground overflow-hidden border-t border-border'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.2"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>
      </div>

      {/* Newsletter Section */}
      <div className='relative border-b border-border'>
        <div className='container mx-auto px-4 py-12 md:py-16'>
          <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
            <div className='text-center lg:text-left'>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4'>
                <span className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                  Stay Updated! 🍕
                </span>
              </h3>
              <p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
                Get exclusive deals, new pizza launches, and mouth-watering
                offers delivered straight to your inbox!
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md lg:max-w-none mx-auto lg:mx-0'>
              <Input
                type='email'
                placeholder='Enter your email address'
                className='h-12 md:h-14 px-4 md:px-6 rounded-2xl bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-orange-500 focus:ring-orange-500/20 text-base md:text-lg shadow-sm'
              />
              <Button className='h-12 md:h-14 px-6 md:px-8 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold transition-all duration-200 hover:scale-105 border-0 text-base md:text-lg whitespace-nowrap shadow-lg'>
                Subscribe
                <Send className='ml-2 h-4 w-4 md:h-5 md:w-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='relative container mx-auto px-4 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2 space-y-4 md:space-y-6 text-center md:text-left'>
            <div className='flex items-center justify-center md:justify-start space-x-3'>
              <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center'>
                <Pizza className='h-4 w-4 md:h-5 md:w-5 text-white' />
              </div>
              <div>
                <h2 className='text-xl md:text-2xl font-black'>
                  <span className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent'>
                    OvenFresh Pizza
                  </span>
                </h2>
                <p className='text-xs md:text-sm text-muted-foreground'>
                  Authentic Italian Since 2019
                </p>
              </div>
            </div>

            <p className='text-muted-foreground leading-relaxed text-base md:text-lg'>
              We&apos;re passionate about bringing you the most authentic
              Italian pizza experience with traditional wood-fired ovens and the
              finest imported ingredients.
            </p>

            {/* Social Media */}
            <div>
              <h4 className='font-bold text-base md:text-lg mb-3 md:mb-4 text-foreground'>
                Follow Us
              </h4>
              <div className='flex justify-center md:justify-start space-x-3 md:space-x-4'>
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-500' },
                  { icon: Youtube, href: '#', color: 'hover:text-red-600' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 md:w-12 md:h-12 bg-muted hover:bg-accent rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 text-muted-foreground ${social.color} border border-border`}
                  >
                    <social.icon className='h-4 w-4 md:h-5 md:w-5' />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4 md:space-y-6 text-center md:text-left'>
            <h4 className='font-bold text-base md:text-lg text-foreground'>
              Quick Links
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              {[
                { name: 'Our Menu', href: '/menu' },
                { name: 'Order Online', href: '/order' },
                { name: 'Track Order', href: '/track' },
                { name: 'Locations', href: '/locations' },
                { name: 'Careers', href: '/careers' },
                { name: 'Franchise', href: '/franchise' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 inline-block text-sm md:text-base'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className='space-y-4 md:space-y-6 text-center md:text-left'>
            <h4 className='font-bold text-base md:text-lg text-foreground'>
              Customer Care
            </h4>
            <ul className='space-y-2 md:space-y-3'>
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Food Safety', href: '/safety' },
                { name: 'Nutrition Info', href: '/nutrition' },
                { name: 'Allergen Info', href: '/allergens' },
                { name: 'Feedback', href: '/feedback' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-muted-foreground hover:text-orange-600 transition-colors duration-200 hover:translate-x-1 inline-block text-sm md:text-base'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4 md:space-y-6 text-center md:text-left'>
            <h4 className='font-bold text-base md:text-lg text-foreground'>
              Get in Touch
            </h4>
            <div className='space-y-3 md:space-y-4'>
              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center mt-1'>
                  <MapPin className='h-4 w-4 md:h-5 md:w-5 text-red-600' />
                </div>
                <div className='text-left'>
                  <p className='text-foreground font-medium text-sm md:text-base'>
                    123 Pizza Street
                  </p>
                  <p className='text-muted-foreground text-xs md:text-sm'>
                    Downtown, NY 10001
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mt-1'>
                  <Phone className='h-4 w-4 md:h-5 md:w-5 text-orange-600' />
                </div>
                <div className='text-left'>
                  <p className='text-foreground font-medium text-sm md:text-base'>
                    +1 (555) 123-PIZZA
                  </p>
                  <p className='text-muted-foreground text-xs md:text-sm'>
                    24/7 Customer Support
                  </p>
                </div>
              </div>

              <div className='flex items-start justify-center md:justify-start space-x-3'>
                <div className='w-8 h-8 md:w-10 md:h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center mt-1'>
                  <Clock className='h-4 w-4 md:h-5 md:w-5 text-yellow-600' />
                </div>
                <div className='text-left'>
                  <p className='text-foreground font-medium text-sm md:text-base'>
                    Mon-Sun: 11AM-11PM
                  </p>
                  <p className='text-muted-foreground text-xs md:text-sm'>
                    Always Fresh & Hot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className='border-t border-border mt-12 pt-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
            {[
              { icon: Heart, text: 'Made with Love', color: 'text-red-500' },
              { icon: CreditCard, text: 'Secure Payments', color: 'text-green-500' },
              { icon: Truck, text: 'Fast Delivery', color: 'text-blue-500' },
              { icon: Award, text: 'Quality Assured', color: 'text-purple-500' },
            ].map((badge, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center space-y-2'
              >
                <div className='w-12 h-12 bg-muted rounded-2xl flex items-center justify-center'>
                  <badge.icon className={`h-6 w-6 ${badge.color}`} />
                </div>
                <p className='text-sm font-medium text-muted-foreground'>
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-border mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='flex items-center space-x-4'>
              <p className='text-sm text-muted-foreground'>
                © 2024 OvenFresh Pizza. All rights reserved.
              </p>
            </div>
            <div className='flex items-center space-x-6'>
              <Link
                href='/privacy'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                href='/cookies'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}