import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ActivityCard from "@/components/ActivityCard";
import heroImage from "@/assets/hero-charity.jpg";
import aiMatchImage from "@/assets/ai-match.jpg";

const Index = () => {
  const mockActivities = [
    {
      id: "1",
      title: "社区环保清洁活动",
      description: "携手共建绿色家园，清理社区公园垃圾，美化环境",
      date: "2025年10月15日",
      location: "朝阳区望京公园",
      participants: 32,
      category: "环保公益",
    },
    {
      id: "2",
      title: "敬老院爱心陪伴",
      description: "陪伴老人聊天，为他们带去温暖和关怀",
      date: "2025年10月20日",
      location: "海淀区夕阳红敬老院",
      participants: 18,
      category: "关爱老人",
    },
    {
      id: "3",
      title: "乡村支教活动",
      description: "为山区儿童带去知识和希望，助力教育公平",
      date: "2025年10月25日",
      location: "河北省张家口市",
      participants: 25,
      category: "教育支持",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                AI智能匹配，精准链接善意
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                让每一份善意
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  都能找到行动
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                益行Hub致力于打造最专业的公益活动信息枢纽，通过AI智能匹配技术，让志愿者与公益项目精准对接，让每一份善意都能发挥最大价值。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/activities">
                  <Button size="lg" className="gap-2">
                    探索活动
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI智能匹配
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
              <img
                src={heroImage}
                alt="公益活动"
                className="relative rounded-3xl shadow-[var(--shadow-warm)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">三大核心功能</h2>
          <p className="text-lg text-muted-foreground">
            全方位支持公益行动，让爱心传递更高效
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-2 transition-all hover:border-primary hover:shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <CardTitle>公益信息枢纽</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                汇聚全国各地的公益活动信息，实时更新，分类清晰，让你轻松找到心仪的公益项目。
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 transition-all hover:border-secondary hover:shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <CardTitle>AI智能匹配</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                基于你的兴趣、时间和地理位置，AI为你推荐最适合的公益活动，让参与更精准。
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 transition-all hover:border-accent hover:shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle>行动追踪记录</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                记录你的每一次公益行动，见证善意的累积，分享你的公益故事，激励更多人加入。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">精选活动</h2>
              <p className="text-lg text-muted-foreground">
                发现身边的公益机会，让善意付诸行动
              </p>
            </div>
            <Link to="/activities">
              <Button variant="outline" className="gap-2">
                查看更多
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockActivities.map((activity) => (
              <ActivityCard key={activity.id} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Matching CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="relative overflow-hidden border-2 border-primary/20">
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
          <CardContent className="relative p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold md:text-4xl">
                  让AI帮你找到
                  <br />
                  <span className="text-primary">最适合的公益活动</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  告诉我们你的兴趣和时间安排，AI会为你推荐最匹配的公益项目，让参与公益变得更简单高效。
                </p>
                <Button size="lg" className="gap-2">
                  <Sparkles className="h-5 w-5" />
                  开始AI匹配
                </Button>
              </div>
              <div className="relative">
                <img
                  src={aiMatchImage}
                  alt="AI匹配"
                  className="rounded-2xl shadow-[var(--shadow-card)]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 益行Hub. 让每一份善意都能找到行动
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
