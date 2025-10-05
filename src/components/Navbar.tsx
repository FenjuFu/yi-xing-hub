import { Link, useLocation } from "react-router-dom";
import { Heart, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
            <Heart className="h-5 w-5 text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            益行Hub
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            首页
          </Link>
          <Link
            to="/activities"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/activities") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            活动列表
          </Link>
          <Button variant="default" size="sm" className="gap-2">
            <Sparkles className="h-4 w-4" />
            AI匹配
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
