import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Map } from './pages/Map';
import { HostDashboard } from './pages/host/HostDashboard';
import { RiderDashboard } from './pages/rider/RiderDashboard';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { BecomeHost } from './pages/BecomeHost';
import { Safety } from './pages/Safety';
import { Help } from './pages/Help';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { Refunds } from './pages/Refunds';
import { WalletPage } from './pages/Wallet';
import { Settings } from './pages/Settings';
import { Community } from './pages/Community';
import { Rewards } from './pages/Rewards';
import { HostResources } from './pages/HostResources';
import { BookingFlow } from './pages/BookingFlow';
import { BookingConfirmation } from './pages/BookingConfirmation';
import { PaymentMethods } from './pages/PaymentMethods';
import { PaymentSuccess } from './pages/PaymentSuccess';
import { StationDetails } from './pages/StationDetails';
import { HostAmenities } from './pages/HostAmenities';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/map" element={<Map />} />
                <Route path="/host-dashboard" element={<HostDashboard />} />
                <Route path="/rider-dashboard" element={<RiderDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/become-host" element={<BecomeHost />} />
                <Route path="/safety" element={<Safety />} />
                <Route path="/help" element={<Help />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/community" element={<Community />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/host-resources" element={<HostResources />} />
                <Route path="/booking" element={<BookingFlow />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                <Route path="/payment-methods" element={<PaymentMethods />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/station/:id" element={<StationDetails />} />
              </Routes>
            </main>
            <Footer />
            <Toaster 
              position="bottom-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--toast-bg)',
                  color: 'var(--toast-color)',
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;