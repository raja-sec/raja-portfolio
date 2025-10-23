import React from 'react';
import { FaGithub, FaLinkedin, FaBars, FaSun, FaPalette } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/raja-sec', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/raja-mishra', icon: '💼' },
  ];

  return (
    
      
        
          
<footer className="border-t border-gray-800 py-6 text-center text-gray-400">
  <p>© {currentYear} Raja Mishra. All rights reserved.</p>
  {/* <div className="flex justify-center gap-4 mt-4">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition"
      >
        {link.icon}
      </a>
    ))}
  </div> */}

  <div className="flex justify-center mt-4 space-x-5">
  
              {/* Social icons */}
              <a
                href="https://github.com/raja-sec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/raja-mishra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
  <div class="pt-3">
    <p>Made with ❤️ by Raja Mishra</p>
  </div>
  
</footer>

          
        
      
    
  );
}