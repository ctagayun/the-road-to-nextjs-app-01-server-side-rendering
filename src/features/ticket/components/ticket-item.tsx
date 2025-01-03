//*This becomes a client component even in the absence of "useClient" directive
//*because its parent TicketsPages is a client component
import clsx from "clsx";

import Link from "next/link";
import { ticketPath } from "@/paths" //*This is a path constants - see paths.ts
import  {
      Card,
      CardHeader,
      CardTitle,
      CardContent }
  from  "@/components/ui/card";

import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
    ticket: Ticket, //*Ticket is a type. See import above
    isDetail?: boolean;
}
  
const Ticketitem = ({ticket, isDetail}: TicketItemProps) => {
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)} >
                {/* //*Icon */}
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
             </Link>
        </Button>
    );

    //* go to TicketPages and cut and paste "Card"
    //*  For each ticket we want to return a <Card> displaying title and a link
    //*   className="w-full max-w-[420px] is for responsiveness when weresize the page
    return (

        //*We are going to move the Link "view". First let's put a <div> wrapper around card
        //* className="w-full max-w-[420px] flex gap-x-1" will move the link to the right of a ticket 
        //*<div className="w-full max-w-[420px] flex gap-x-1"> reafactored see next div
       
        //* if isDetail is true make width 580px otherwise 420px
        <div className={clsx("w-full flex gap-x-1", {
            "max-w-[580px]" : isDetail,
            "max-w-[420px]" : !isDetail,
        })}>
        

          <Card className="w-full">
                <CardHeader>
                <CardTitle className="flex gap-x-2">
                    <span> {TICKET_ICONS[ticket.status]} </span>
                    <span className="truncate">{ticket.title}</span>
                </CardTitle>
                </CardHeader>

                <CardContent>
                   {/* //* Adjust line-clam-3. Clam-3 trims the content down to 3-lines */}
                   {/* <span className="line-clamp-3 whitespace-break-spaces">
                         {ticket.content}
                       </span> */}
                    <span  
                       //*if isDetail is true show only 3 lines. Otherwise show all
                       className={clsx("whitespace-break-spaces", {
                        "line-clamp-3": !isDetail,
                      })}
                    >
                      {ticket.content +
                        ticket.content +
                        ticket.content +
                        ticket.content +
                        ticket.content +
                        ticket.content +
                        ticket.content +
                        ticket.content +
                        ticket.content  
                      }  
                      
                       
                    </span>

                </CardContent>

                {/* //* ticketPath is absolute path to replace: <Link href={`/tickets/${ticket.id}`} className="text-sm underline"> */}
               
              </Card>
               
                {/* //* Move the link outside the card. Next we want 
                //*an icon so remove className="text-sm underline"
                //* wrap the link and icon in a button    */}

               {/* <Button variant="outline" size="icon" asChild>
                <Link href={ticketPath(ticket.id)} >
                    <LucideSquareArrowOutUpRight className="h-2 w-4" />
                </Link>
               </Button>    

              //* If isDetail is true dont render anything. Otherwise,
              //* render the DetailButton*/}
              {isDetail ? null :
                         (<div className="flex flex-col gap-y-1"> 
                             {detailButton} 
                         </div>) } 

            </div>
        )
};

export {Ticketitem}