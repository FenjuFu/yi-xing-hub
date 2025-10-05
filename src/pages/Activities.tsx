import { useState } from "react";
import Navbar from "@/components/Navbar";
import ActivityCard from "@/components/ActivityCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const Activities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const categories = ["全部", "环保公益", "关爱老人", "教育支持", "扶贫济困", "医疗健康"];

  const activities = [
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
    {
      id: "4",
      title: "贫困地区物资捐赠",
      description: "为贫困山区送去生活必需品和学习用具",
      date: "2025年11月1日",
      location: "云南省昆明市",
      participants: 40,
      category: "扶贫济困",
    },
    {
      id: "5",
      title: "社区健康义诊",
      description: "免费为社区居民提供健康检查和医疗咨询服务",
      date: "2025年11月5日",
      location: "丰台区社区中心",
      participants: 28,
      category: "医疗健康",
    },
    {
      id: "6",
      title: "河道垃圾清理",
      description: "保护水资源，清理河道垃圾，维护生态环境",
      date: "2025年11月10日",
      location: "通州区运河沿岸",
      participants: 35,
      category: "环保公益",
    },
  ];

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "全部" || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold">公益活动列表</h1>
          <p className="text-lg text-muted-foreground">
            发现身边的公益机会，让善意付诸行动
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="搜索活动名称或描述..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer transition-all hover:scale-105"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            找到 <span className="font-semibold text-foreground">{filteredActivities.length}</span> 个活动
          </p>
        </div>

        {filteredActivities.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} {...activity} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Filter className="mb-4 h-16 w-16 text-muted-foreground/50" />
            <h3 className="mb-2 text-xl font-semibold">未找到匹配的活动</h3>
            <p className="text-muted-foreground">
              试试调整搜索条件或选择其他分类
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Activities;
