import { useState } from "react";
import { Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export const TimeSelector = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [readingSpeed, setReadingSpeed] = useState<number[]>([250]);

  const handleGetRecommendations = () => {
    if (!selectedTime) {
      console.log('Please select your available time first');
      return;
    }
    
    const requestData = {
      time: selectedTime,
      wpm: readingSpeed[0]
    };
    
    console.log('Requesting recommendations with:', requestData);
    // TODO: Send request to backend API
    // fetch('/api/recommend', { method: 'POST', body: JSON.stringify(requestData) })
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-card to-card/80 border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Clock className="h-5 w-5 text-primary" />
          Customize Your Reading
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Time Selection */}
        <div className="space-y-2">
          <Label htmlFor="time-select" className="text-sm font-medium text-foreground">
            Available Time
          </Label>
          <Select value={selectedTime} onValueChange={setSelectedTime}>
            <SelectTrigger id="time-select" className="bg-background border-border">
              <SelectValue placeholder="Select your available time" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="5">5 minutes</SelectItem>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reading Speed Slider */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-foreground flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Reading Speed: {readingSpeed[0]} WPM
          </Label>
          <Slider
            value={readingSpeed}
            onValueChange={setReadingSpeed}
            max={400}
            min={100}
            step={25}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>100 WPM</span>
            <span>Slow</span>
            <span>Fast</span>
            <span>400 WPM</span>
          </div>
        </div>

        {/* Get Recommendations Button */}
        <Button
          onClick={handleGetRecommendations}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-medium"
          disabled={!selectedTime}
        >
          Get Personalized Recommendations
        </Button>

        {/* Info Text */}
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          We'll find articles that perfectly match your available time and reading pace
        </p>
      </CardContent>
    </Card>
  );
};