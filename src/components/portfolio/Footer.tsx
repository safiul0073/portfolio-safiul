const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Section: Menu */}
            <div className="flex flex-col items-center justify-center">
              {/* <h3 className="text-xl font-bold mb-2">Menu</h3> */}
              <ul className="flex flex-col md:flex-row gap-4">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
  
            {/* Right Section: Contact Info */}
            <div className="flex flex-col items-center justify-center">
              {/* <h3 className="text-xl font-bold mb-2">Contact Us</h3> */}
              <address className="not-italic">
                <p>Pirojpur, Debidwar</p>
                <p>Comilla, Bangladesh</p>
                <p>Phone: +880 167 6413972</p>
                <p>Email: mdsafiul0073@gmail.com</p>
              </address>
            </div>
          </div>
                      {/* Bottom Section: Copyright */}
            <div className="text-center mt-4 md:mt-0 py-4 md:py-6">
              <p>&copy; 2024 Md Safiullah</p>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;