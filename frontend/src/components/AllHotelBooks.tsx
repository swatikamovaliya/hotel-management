/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import CreateHotel from "./CreateHotel";

const AllHotelBooks = ({ resentHotel }: { resentHotel: any[] | [] }) => {
  return (
    <Card className="col-span-4 w-[150vh]">
      <CardHeader>
        <CardTitle>
          <div className="justify-between flex">
            <p>Resent Hotel Books</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Add hotel</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] p-0">
                <ScrollArea className="h-[600px] rounded-md border p-4">
                  <CreateHotel />
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="flex flex-col space-y-2 gap-y-4">
          {resentHotel.map((hotel: any, index) => (
            <div key={index} className="flex items-center">
              <div className="ml-4 space-y-1">
                <p className="text-base font-medium leading-none">
                  {hotel?.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Book by {hotel.userId} at price {hotel.totalAmount}₹
                </p>
              </div>
              <div className="ml-auto font-medium">
                {new Date(hotel.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false, // Use 24-hour clock
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AllHotelBooks;
