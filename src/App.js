import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './components/ NavBar';
import CombinedSection from './components/CombinedSection';
import Portfolio from './components/ Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';  // Import Skills Section

function App() {
  return (
    <>
      {/* Dynamic Title and Metadata */}
      <Helmet>
        <title>Ghiwa Khoder | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Ghiwa Khoder, showcasing projects and skills in React, Node.js, and web development."
        />
        <meta
          name="keywords"
          content="Ghiwa Khoder, Portfolio, Full Stack Developer, React Developer, Node.js Developer"
        />
        <meta name="author" content="Ghiwa Khoder" />
      </Helmet>

      {/* Main Components */}
      <NavBar />
      <main>
        <CombinedSection />
        <Skills/>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;