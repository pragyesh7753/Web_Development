import { Meteors } from '@/components/ui/meteors'
import React from 'react'

function page() {
  return (
    <div className="w-screen h-screen z-0 bg-gray-900 shadow-xl relative overflow-hidden">
      <Meteors number={150} />
      
      {/* Contact Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen p-4 pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-xs w-full">
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
            <h2 className="text-md font-bold text-white mb-3 text-center">Send Message</h2>
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-2 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-2 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-2 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-2 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-2 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page