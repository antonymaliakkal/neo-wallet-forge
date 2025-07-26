import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { motion } from "framer-motion";
import { X, Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface QRScannerProps {
  onScanSuccess: (data: string) => void;
  onClose: () => void;
}

export function QRScanner({ onScanSuccess, onClose }: QRScannerProps) {
  const [scanner, setScanner] = useState<Html5QrcodeScanner | null>(null);
  const { toast } = useToast();
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scannerRef.current) {
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-scanner",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1.0,
        },
        false
      );

      html5QrcodeScanner.render(
        (decodedText) => {
          onScanSuccess(decodedText);
          html5QrcodeScanner.clear();
          toast({
            title: "QR Code Scanned",
            description: "Successfully scanned QR code!",
          });
        },
        (error) => {
          // Silent error handling for continuous scanning
          console.log("QR scan error:", error);
        }
      );

      setScanner(html5QrcodeScanner);

      return () => {
        html5QrcodeScanner.clear().catch(console.error);
      };
    }
  }, [onScanSuccess, toast]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        // Create a temporary scanner for file scanning
        const { Html5Qrcode } = await import("html5-qrcode");
        const html5QrCode = new Html5Qrcode("temp-file-scanner");
        
        const decodedText = await html5QrCode.scanFile(file, true);
        onScanSuccess(decodedText);
        toast({
          title: "Image Scanned",
          description: "Successfully extracted QR code from image!",
        });
      } catch (error) {
        toast({
          title: "Scan Failed",
          description: "Could not find QR code in the image.",
          variant: "destructive",
        });
        console.error("File scan error:", error);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-outline-variant">
          <h2 className="title-large">Scan QR Code</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-10 w-10 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Scanner */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md"
          >
            <div
              ref={scannerRef}
              id="qr-scanner"
              className="rounded-2xl overflow-hidden elevation-3"
            />
          </motion.div>

          <div className="mt-8 text-center">
            <p className="body-large text-muted-foreground mb-4">
              Position the QR code within the frame
            </p>
            
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button asChild variant="outline" className="btn-outlined">
                  <span>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </span>
                </Button>
              </label>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-4 bg-surface-container rounded-t-3xl">
          <div className="flex items-start gap-3">
            <Camera className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="body-medium font-medium mb-1">Scanning Tips</p>
              <ul className="body-small text-muted-foreground space-y-1">
                <li>• Keep the camera steady</li>
                <li>• Ensure good lighting</li>
                <li>• Hold your device about 6 inches away</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}