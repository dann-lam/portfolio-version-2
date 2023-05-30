import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  //Method sets our currentPage to 'About' by default.
  //Then renders the rest of our pages.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Home") {
      return <Home />;
    }
    return <Contact />;
  };

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Home':
  //       return <Home />;
  //     case 'About':
  //       return <About />;
  //     case 'Blog':
  //       return <Blog />;
  //     default:
  //       return <Contact />;
  //   }
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main-container">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
