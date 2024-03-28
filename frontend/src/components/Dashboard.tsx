/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

type DateCallback = (date: Date) => string;

function formatDate(dateString: string, callback: DateCallback): string {
  const inputDate = new Date(dateString);
  const formattedDate = callback(inputDate);
  return formattedDate;
}

function formatCallback(date: Date): string {
  return `${date.getDate()} ${date
    .toLocaleString("default", { month: "short" })
    .toUpperCase()
    .slice(0, 3)} ${date.getFullYear()}`;
}

const Dashboard = ({
  totalRevenue,
  Subscriptions,
  allSubscription,
}: {
  totalRevenue: number;
  Subscriptions: number;
  allSubscription: any[] | [];
}) => {
  return (
    <div className=" w-[150vh]">
      <Card className="mb-5">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{totalRevenue}</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">See all</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <ScrollArea className="h-[600px] p-4">
                <DialogHeader>
                  <DialogTitle>All Subscriptions</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {allSubscription.map((sub: any, index) => (
                    <div key={index} className="flex items-center">
                      <div className="ml-4 space-y-1">
                        <p className="text-lg my-2 font-medium leading-none">
                          {sub?.name} by {sub?.userId}
                        </p>
                        <div className="flex mt-3 gap-3">
                          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                            {formatDate(sub.checkInDate, formatCallback)}
                          </code>
                          to
                          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                            {formatDate(sub.checkOutDate, formatCallback)}
                          </code>
                        </div>
                      </div>
                      <div className="ml-auto font-medium">{sub?.status}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{Subscriptions}</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
