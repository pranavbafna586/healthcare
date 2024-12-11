"use client"
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("week");

  // Dummy data for charts
  const weeklyData = [
    { day: "Mon", sales: 300, revenue: 500 },
    { day: "Tue", sales: 400, revenue: 700 },
    { day: "Wed", sales: 350, revenue: 600 },
    { day: "Thu", sales: 500, revenue: 800 },
    { day: "Fri", sales: 600, revenue: 900 },
    { day: "Sat", sales: 450, revenue: 750 },
    { day: "Sun", sales: 700, revenue: 1000 },
  ];

  const monthlyData = [
    { week: "Week 1", sales: 1200, revenue: 5000 },
    { week: "Week 2", sales: 1500, revenue: 5500 },
    { week: "Week 3", sales: 1700, revenue: 6000 },
    { week: "Week 4", sales: 2000, revenue: 7000 },
  ];

  return (
    <div className="grid auto-rows-max items-start gap-4 w-full">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Interactive dashboard with real-time insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Create New Order</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">$1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">+25% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-4xl">$5,329</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">+10% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="week">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="week" onClick={() => setSelectedTab("week")}>
              Week
            </TabsTrigger>
            <TabsTrigger value="month" onClick={() => setSelectedTab("month")}>
              Month
            </TabsTrigger>
            <TabsTrigger value="year" onClick={() => setSelectedTab("year")}>
              Year
            </TabsTrigger>
          </TabsList>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                <ListFilter className="h-3.5 w-3.5" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Fulfilled</DropdownMenuItem>
              <DropdownMenuItem>Declined</DropdownMenuItem>
              <DropdownMenuItem>Refunded</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <TabsContent value={selectedTab}>
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedTab === "week" ? "Weekly Sales Data" : "Monthly Sales Data"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedTab === "week" ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
