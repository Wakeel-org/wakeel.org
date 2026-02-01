import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { Button } from './ui/button';

const AppDownloadButtons = ({ className = "" }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button
        onClick={() => window.open('https://play.google.com/store/apps/details?id=pk.digit.aiwakeel', '_blank')}
        variant="outline"
        className="w-full sm:w-auto h-14 px-6 border-2 hover:bg-muted/50 transition-all group"
      >
        <FaGooglePlay className="mr-3 h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
        <div className="flex flex-col items-start leading-none gap-1">
          <span className="text-[10px] text-muted-foreground uppercase font-medium">Get it on</span>
          <span className="text-base font-bold">Google Play</span>
        </div>
      </Button>
      
      <Button
        onClick={() => window.open('https://apps.apple.com/app/wakeel', '_blank')}
        variant="outline"
        className="w-full sm:w-auto h-14 px-6 border-2 hover:bg-muted/50 transition-all group"
      >
        <FaApple className="mr-3 h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors pb-1" />
        <div className="flex flex-col items-start leading-none gap-1">
          <span className="text-[10px] text-muted-foreground uppercase font-medium">Download on the</span>
          <span className="text-base font-bold">App Store</span>
        </div>
      </Button>
    </div>
  );
};

export default AppDownloadButtons;
