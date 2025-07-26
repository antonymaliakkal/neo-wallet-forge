import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, QrCode } from "lucide-react";
import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { PassCard } from "@/components/passes/PassCard";
import { QRScanner } from "@/components/scanner/QRScanner";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { InstallPrompt } from "@/components/install/InstallPrompt";
import { useToast } from "@/hooks/use-toast";

// Mock data for passes
const mockPasses = [
  {
    id: "1",
    type: "event" as const,
    title: "Tech Conference 2024",
    subtitle: "General Admission",
    description: "Annual technology conference featuring the latest innovations",
    location: "San Francisco, CA",
    date: "Dec 15, 2024",
    time: "9:00 AM",
  },
  {
    id: "2", 
    type: "boarding" as const,
    title: "Flight AA1234",
    subtitle: "Economy Class",
    description: "Los Angeles to New York",
    location: "Gate A12",
    date: "Dec 20, 2024",
    time: "2:30 PM",
  },
  {
    id: "3",
    type: "loyalty" as const, 
    title: "Coffee Rewards",
    subtitle: "Gold Member",
    description: "Buy 10 coffees, get 1 free",
    location: "Starbucks",
  },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const [showScanner, setShowScanner] = useState(false);
  const { toast } = useToast();

  const handleScanSuccess = (data: string) => {
    console.log("Scanned data:", data);
    setShowScanner(false);
    toast({
      title: "QR Code Processed",
      description: "Creating your digital pass...",
    });
    // TODO: Process the scanned data with Gemini AI
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20"
            >
              <h2 className="headline-medium mb-2">Welcome to NeoSpan</h2>
              <p className="body-large text-muted-foreground">
                Your digital pass manager powered by AI
              </p>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowScanner(true)}
                className="wallet-card-interactive p-4 flex flex-col items-center gap-2"
              >
                <QrCode className="w-8 h-8 text-primary" />
                <span className="label-large">Scan QR Code</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="wallet-card-interactive p-4 flex flex-col items-center gap-2"
              >
                <Plus className="w-8 h-8 text-primary" />
                <span className="label-large">Create Pass</span>
              </motion.button>
            </motion.div>

            {/* Recent Passes */}
            <div>
              <h3 className="title-large mb-4">Recent Passes</h3>
              <div className="space-y-4">
                {mockPasses.slice(0, 2).map((pass, index) => (
                  <PassCard key={pass.id} {...pass} index={index} />
                ))}
              </div>
            </div>
          </div>
        );

      case "passes":
        return (
          <div className="space-y-4">
            <h2 className="headline-medium">All Passes</h2>
            <div className="space-y-4">
              {mockPasses.map((pass, index) => (
                <PassCard key={pass.id} {...pass} index={index} />
              ))}
            </div>
          </div>
        );

      case "scan":
        return (
          <div className="text-center py-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <QrCode className="w-12 h-12 text-primary" />
            </motion.div>
            <h2 className="headline-medium mb-4">Scan QR Code</h2>
            <p className="body-large text-muted-foreground mb-8">
              Scan any QR code to create a digital pass
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowScanner(true)}
              className="btn-filled"
            >
              Start Scanning
            </motion.button>
          </div>
        );

      case "more":
        return (
          <div className="space-y-4">
            <h2 className="headline-medium">Settings</h2>
            <div className="space-y-2">
              {["Account", "Notifications", "Privacy", "Help & Support"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  className="wallet-card p-4 cursor-pointer"
                >
                  <span className="title-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      
      <main className="px-4 py-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <AnimatePresence>
        {activeTab === "home" && (
          <FloatingActionButton
            icon={QrCode}
            onClick={() => setShowScanner(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScanner && (
          <QRScanner
            onScanSuccess={handleScanSuccess}
            onClose={() => setShowScanner(false)}
          />
        )}
      </AnimatePresence>

      <InstallPrompt />
    </div>
  );
}