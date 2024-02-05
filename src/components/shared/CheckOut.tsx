"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { createOrder } from "@/lib/actions/order.actions";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const router = useRouter();

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await createOrder(order);
    router.push("/profile");
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="button sm:w-fit bg-primary-500 px-4 text-white">
          {event.isFree ? "Get Ticket" : "Buy Ticket"}
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This is the moment of choice
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No</AlertDialogCancel>
            <AlertDialogAction onClick={onCheckout}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Checkout;
