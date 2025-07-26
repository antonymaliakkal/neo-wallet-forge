import { motion } from "framer-motion";
import { Home, CreditCard, QrCode, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "passes", label: "Passes", icon: CreditCard },
  { id: "scan", label: "Scan", icon: QrCode },
  { id: "more", label: "More", icon: MoreHorizontal },
];

export function BottomNavigation({ activeTab = "home", onTabChange }: BottomNavigationProps) {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 surface-container-high border-t border-outline-variant bg-background/95 backdrop-blur-lg"
    >
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange?.(tab.id)}
              className="flex flex-col items-center gap-1 h-auto py-2 px-3 rounded-xl relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <Icon className="h-5 w-5" />
              </motion.div>
              
              <motion.span
                animate={{
                  color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                  fontWeight: isActive ? 600 : 400,
                }}
                transition={{ duration: 0.2 }}
                className="text-xs relative z-10"
              >
                {tab.label}
              </motion.span>
            </Button>
          );
        })}
      </div>
    </motion.nav>
  );
}