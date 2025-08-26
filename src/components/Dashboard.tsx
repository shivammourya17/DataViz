import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Upload, 
  BarChart3, 
  LineChart, 
  PieChart, 
  Download, 
  MessageCircle,
  Database,
  Trash2,
  Save
} from "lucide-react";

const Dashboard = ({ onBackToHome }: { onBackToHome: () => void }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-2xl font-bold">DataViz Dashboard</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onBackToHome}>
                Back to Home
              </Button>
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Session
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Your Dataset
                </CardTitle>
                <CardDescription>
                  Upload a CSV file to start analyzing your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg mb-2">Drag and drop your CSV file here</p>
                  <p className="text-muted-foreground mb-4">or</p>
                  <Button>Choose File</Button>
                </div>
              </CardContent>
            </Card>

            {/* Visualizations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Data Visualizations
                </CardTitle>
                <CardDescription>
                  AI-generated charts and insights from your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 text-center bg-muted/50">
                    <LineChart className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Line Chart</p>
                    <p className="text-sm text-muted-foreground">Trend Analysis</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center bg-muted/50">
                    <BarChart3 className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-medium">Bar Chart</p>
                    <p className="text-sm text-muted-foreground">Category Comparison</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center bg-muted/50">
                    <PieChart className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">Pie Chart</p>
                    <p className="text-sm text-muted-foreground">Distribution</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center bg-muted/50">
                    <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-medium">Data Table</p>
                    <p className="text-sm text-muted-foreground">Raw Data View</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Data Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dataset Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rows:</span>
                    <span className="font-medium">--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Columns:</span>
                    <span className="font-medium">--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Missing Values:</span>
                    <span className="font-medium">--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Types:</span>
                    <span className="font-medium">--</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Chat */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  AI Assistant
                </CardTitle>
                <CardDescription>
                  Ask questions about your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-40 border rounded-lg p-3 bg-muted/30 text-sm text-muted-foreground">
                    Upload a dataset to start chatting with the AI assistant...
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask about your data..."
                      className="flex-1"
                    />
                    <Button size="sm">Send</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Save className="w-4 h-4 mr-2" />
                    Save Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;