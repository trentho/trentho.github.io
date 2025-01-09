// src/components/Layout.js

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <NavBar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Optional Footer */}
      {/* You can add a footer here if needed */}
    </div>
  );
};

export default Layout;