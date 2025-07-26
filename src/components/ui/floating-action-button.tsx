import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  onClick?: () => void;
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeVariants = {
  sm: "w-12 h-12",
  md: "w-14 h-14", 
  lg: "w-16 h-16",
};

export function FloatingActionButton({ 
  onClick, 
  icon: Icon, 
  className,
  size = "md" 
}: FloatingActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fab fixed bottom-20 right-4 z-30",
        sizeVariants[size],
        className
      )}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Icon className="w-6 h-6" />
    </motion.button>
  );
}