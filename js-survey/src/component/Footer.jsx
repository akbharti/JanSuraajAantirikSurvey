const Footer = () => (
  <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-amber-400/30">
    <div className="container mx-auto px-6 py-8">
      <div className="text-center space-y-4">
        {/* Developer heading */}
        <h3 className="text-lg md:text-xl font-semibold text-amber-300">
          Developed By
        </h3>
        
        {/* Developer name */}
        <p className="text-xl md:text-2xl font-bold text-white">
          अभिषेक भारती
        </p>
        
        {/* Social links */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Email */}
          <a 
            href="mailto:bharrtiabhishek02@gmail.com"
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/abhishek-kumar-bharti-791128107/"
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/abhishek__bharti_/"
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/@abhishek_k_bharti"
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        
        {/* Copyright */}
        {/* <div className="pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Jan Suraaj Survey. All rights reserved.
          </p>
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
