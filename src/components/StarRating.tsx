import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
  className?: string;
}

export const StarRating = ({ 
  rating, 
  onRatingChange, 
  readOnly = false, 
  className 
}: StarRatingProps) => {
  const handleStarClick = (starValue: number) => {
    if (!readOnly && onRatingChange) {
      onRatingChange(starValue);
    }
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((starValue) => (
        <button
          key={starValue}
          type="button"
          onClick={() => handleStarClick(starValue)}
          disabled={readOnly}
          className={cn(
            "transition-colors duration-200",
            !readOnly && "hover:scale-110 cursor-pointer",
            readOnly && "cursor-default"
          )}
        >
          <Star
            className={cn(
              "h-4 w-4 transition-colors duration-200",
              starValue <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-muted-foreground hover:text-yellow-400"
            )}
          />
        </button>
      ))}
      <span className="ml-2 text-xs text-muted-foreground">
        {rating > 0 ? `${rating}/5` : 'Rate this article'}
      </span>
    </div>
  );
};