import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Heart, Share2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ActivityDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would be fetched based on the id
  const activity = {
    id: id || "1",
    title: "社区环保清洁活动",
    description: "携手共建绿色家园，清理社区公园垃圾，美化环境。让我们一起用实际行动保护我们的家园，为子孙后代留下一片绿水青山。",
    fullDescription: "本次活动将组织志愿者对望京公园进行全面清洁。活动内容包括：清理草地垃圾、清理湖边废弃物、整理花坛、清理步道等。我们将提供所有必要的清洁工具和防护用品，确保每位志愿者的安全。活动结束后，我们还将组织环保知识讲座，提升大家的环保意识。",
    date: "2025年10月15日",
    time: "上午9:00 - 下午12:00",
    location: "朝阳区望京公园",
    participants: 32,
    maxParticipants: 50,
    category: "环保公益",
    organizer: "北京绿色家园公益组织",
    requirements: [
      "年满18周岁",
      "身体健康，能够进行户外活动",
      "有环保意识，爱护环境",
      "能够按时到达活动地点",
    ],
    benefits: [
      "获得志愿服务证明",
      "结识志同道合的朋友",
      "为环保事业贡献力量",
      "提升社会责任感",
    ],
  };

  const handleJoin = () => {
    toast.success("报名成功！", {
      description: "我们会通过短信或邮件通知您活动详情。",
    });
  };

  const handleShare = () => {
    toast.success("分享链接已复制到剪贴板");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/activities">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            返回活动列表
          </Button>
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="flex h-full w-full items-center justify-center">
                <Heart className="h-32 w-32 text-primary/30" />
              </div>
            </div>

            {/* Title and Category */}
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                {activity.category}
              </Badge>
              <h1 className="mb-4 text-4xl font-bold">{activity.title}</h1>
              <p className="text-lg text-muted-foreground">{activity.description}</p>
            </div>

            {/* Details Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">活动日期</p>
                    <p className="font-semibold">{activity.date}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">活动时间</p>
                    <p className="font-semibold">{activity.time}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">活动地点</p>
                    <p className="font-semibold">{activity.location}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">参与人数</p>
                    <p className="font-semibold">
                      {activity.participants}/{activity.maxParticipants}人
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Full Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">活动详情</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">参与要求</h2>
                <ul className="space-y-2">
                  {activity.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">你将获得</h2>
                <ul className="space-y-2">
                  {activity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2">
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="mb-2 text-sm text-muted-foreground">主办方</p>
                  <p className="font-semibold">{activity.organizer}</p>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleJoin} className="w-full gap-2" size="lg">
                    <Heart className="h-5 w-5" />
                    立即报名
                  </Button>
                  <Button onClick={handleShare} variant="outline" className="w-full gap-2" size="lg">
                    <Share2 className="h-5 w-5" />
                    分享活动
                  </Button>
                </div>

                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    已有 <span className="font-semibold text-foreground">{activity.participants}</span> 人报名
                  </p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      style={{
                        width: `${(activity.participants / activity.maxParticipants) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    还剩 {activity.maxParticipants - activity.participants} 个名额
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
