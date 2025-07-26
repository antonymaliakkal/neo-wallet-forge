import { motion } from "framer-motion";
import { MoreVertical, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PassCardProps {
  type: "event" | "boarding" | "loyalty" | "generic";
  title: string;
  subtitle?: string;
  description?: string;
  location?: string;
  date?: string;
  time?: string;
  color?: "blue" | "green" | "red" | "yellow";
  logoUrl?: string;
  index?: number;
}

const typeConfig = {
  event: {
    gradient: "from-wallet-blue/20 to-wallet-blue/5",
    border: "border-wallet-blue/30",
    icon: Calendar,
  },
  boarding: {
    gradient: "from-wallet-green/20 to-wallet-green/5",
    border: "border-wallet-green/30",
    icon: MapPin,
  },
  loyalty: {
    gradient: "from-wallet-yellow/20 to-wallet-yellow/5",
    border: "border-wallet-yellow/30",
    icon: Clock,
  },
  generic: {
    gradient: "from-primary/20 to-primary/5",
    border: "border-primary/30",
    icon: Calendar,
  },
};

export function PassCard({
  type,
  title,
  subtitle,
  description,
  location,
  date,
  time,
  logoUrl,
  index = 0,
}: PassCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="wallet-card-interactive group"
    >
      <div
        className={`bg-gradient-to-br ${config.gradient} border ${config.border} rounded-2xl p-4 h-48 relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-current" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-current" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={title}
                className="w-10 h-10 rounded-lg object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            )}
            <div>
              <h3 className="title-medium text-foreground font-google-sans">
                {title}
              </h3>
              {subtitle && (
                <p className="body-small text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Add to Google Wallet</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content */}
        <div className="space-y-2 relative z-10">
          {description && (
            <p className="body-medium text-foreground/80 line-clamp-2">
              {description}
            </p>
          )}
          
          <div className="flex items-center gap-4 text-muted-foreground">
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className="body-small">{location}</span>
              </div>
            )}
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span className="body-small">{date}</span>
              </div>
            )}
            {time && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span className="body-small">{time}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </motion.div>
  );
}