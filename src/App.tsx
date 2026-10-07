import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveDagRunner } from './components/InteractiveDagRunner';
import { InfrastructureStack } from './components/InfrastructureStack';
import { EnterpriseScenarios } from './components/EnterpriseScenarios';
import { ProtocolSpecs } from './components/ProtocolSpecs';
import { SecurityCompliance } from './components/SecurityCompliance';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ArchitectureDiagnosticModal } from './components/ArchitectureDiagnosticModal';

const MainLayout: React.FC = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 flex flex-col selection:bg-slate-900 selection:text-white">
      {/* Global Minimalist Header with Selyron Brand Icon */}
      <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Main Single-Page Flagship Narrative */}
      <main className="flex-grow">
        <HeroSection onOpenDiagnostic={handleOpenDiagnostic} />
        <InteractiveDagRunner />
        <InfrastructureStack />
        <EnterpriseScenarios />
        <ProtocolSpecs />
        <SecurityCompliance />
        <FaqSection onOpenDiagnostic={handleOpenDiagnostic} />
      </main>

      {/* Swiss Minimalist Footer with Selyron Brand Icon */}
      <Footer onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Interactive 3-Step Architecture Diagnostic Modal */}
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
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
