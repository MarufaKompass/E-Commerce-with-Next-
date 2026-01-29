'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-200 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Your Store</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Premium e-commerce solutions for modern businesses. Discover quality products and exceptional service.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">123 Business Street, NY 10001</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span className="text-sm">support@yourstore.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">New Arrivals</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Best Sellers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Sale Items</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Collections</a></li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Track Order</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">Press</a></li>
                        </ul>
                    </div>
                </div>
                {/* Social Media & Bottom */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
                            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                            <span className="hidden md:inline">•</span>
                            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
                            <span className="hidden md:inline">•</span>
                            <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
                        </div>

                        <div className="text-gray-500 text-sm">
                            © 2026  Store. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
