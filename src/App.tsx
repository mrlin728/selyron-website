import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ArchitectureDiagnosticModal } from './components/ArchitectureDiagnosticModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SpecsPage } from './pages/SpecsPage';
import { SecurityPage } from './pages/SecurityPage';
import { GuaranteePage } from './pages/GuaranteePage';
import { DiagnosticPage } from './pages/DiagnosticPage';

const MainLayout: React.FC = () => {
  const { currentPage } = useRouter();
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'architecture':
        return <ArchitecturePage onOpenDiagnostic={handleOpenDiagnostic} />;
      case 'solutions':
        return <SolutionsPage onOpenDiagnostic={handleOpenDiagnostic} />;
      case 'specs':
        return <SpecsPage />;
      case 'security':
        return <SecurityPage />;
      case 'guarantee':
        return <GuaranteePage onOpenDiagnostic={handleOpenDiagnostic} />;
      case 'diagnostic':
        return <DiagnosticPage />;
      case 'home':
      default:
        return <HomePage onOpenDiagnostic={handleOpenDiagnostic} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col selection:bg-slate-900 selection:text-white">
      {/* Global Minimalist Header with Selyron Brand Icon */}
      <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Dynamic Multi-Page Router View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Swiss Minimalist Footer with Status & Multi-Page Sitemap */}
      <Footer onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Interactive Architecture Diagnostic Modal */}
      <ArchitectureDiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <MainLayout />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
