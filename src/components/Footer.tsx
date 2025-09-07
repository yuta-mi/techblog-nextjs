export const Footer = () => {
  return (
    <footer className="mt-16 bg-white/90 backdrop-blur-sm border-t border-gray-200/50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <small className="text-sm text-gray-600 font-medium">
            © 2025 Yuta Miura
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;