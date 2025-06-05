import Link from "next/link"


function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h3 className="text-white font-semibold mb-4">About Us</h3>
                    <p className="text-md">
                        Harmony Music School offers quality music education for all ages and skill levels. Inspiring creativity and passion for music since 2005.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-md">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white">About</Link></li>
                        <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <ul className="space-y-2 text-md">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
                        <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="text-md space-y-2">
                        <li>Email: info@harmonymusicschool.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>123 Melody Lane, Music City</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-sm pt-8">
                © 2025 Harmony Music School. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer