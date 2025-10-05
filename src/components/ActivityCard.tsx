import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

interface ActivityCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  category: string;
  image?: string;
}

const ActivityCard = ({
  id,
  title,
  description,
  date,
  location,
  participants,
  category,
  image,
}: ActivityCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-[var(--shadow-warm)]">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <Users className="h-16 w-16 text-primary/30" />
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            {participants}人
          </span>
        </div>
        <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            {date}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {location}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/activity/${id}`} className="w-full">
          <Button className="w-full" variant="default">
            查看详情
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
