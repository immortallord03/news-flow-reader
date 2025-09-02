import { Clock, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "./StarRating";
import { useState } from "react";

interface ArticleCardProps {
  title: string;
  summary: string;
  readingTime: string;
  category: string;
  imageUrl?: string;
  wordCount: number;
}

export const ArticleCard = ({ 
  title, 
  summary, 
  readingTime, 
  category, 
  imageUrl, 
  wordCount 
}: ArticleCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement text-to-speech with OpenAI API
    console.log('Voice playback requested for:', title);
  };

  const handleRating = (rating: number) => {
    setUserRating(rating);
    // TODO: Store rating in Supabase
    console.log('Article rated:', rating, 'stars for:', title);
  };

  return (
    <Card className="group overflow-hidden border-border bg-gradient-to-br from-card to-card/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20">
      {/* Article Image */}
      <div className="aspect-video overflow-hidden bg-muted">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <span className="text-4xl text-muted-foreground/50">📰</span>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Category Badge */}
        <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
          {category}
        </Badge>

        {/* Title */}
        <h3 className="font-semibold text-lg leading-tight mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {summary}
        </p>

        {/* Reading Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readingTime}</span>
          </div>
          <span>{wordCount} words</span>
        </div>

        {/* Star Rating */}
        <StarRating 
          rating={userRating} 
          onRatingChange={handleRating}
          className="mb-3"
        />
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1"
          onClick={() => console.log('Reading article:', title)}
        >
          Read Article
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePlay}
          className={`px-3 ${isPlaying ? 'text-primary' : 'text-muted-foreground'} hover:text-primary`}
        >
          <Play className={`h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />
          <span className="sr-only">Play audio</span>
        </Button>
      </CardFooter>
    </Card>
  );
};