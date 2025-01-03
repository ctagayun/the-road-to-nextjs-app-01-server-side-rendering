
//*This component displays a specific ticketId
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import { Ticketitem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/queries/get-ticket";


//*Create a type called params
type TicketPageProps = {
    params: Promise < {
        "ticketId": string; 
    }>
   };

//*({params}) - the paren means access params. The {params} code destructure's 
//*params after accessing it
const TicketPage = async ({params}: TicketPageProps) =>
{
   //*const { ticketId } = await params;
   //*const ticket = initialTickets.find((ticket => ticket.id === ticketId));

   //*Let's use src/component/features/queries/get-ticket
   //*get-ticket does server-side rendering. It renders the HTML in the
   //*server and hand it over to the client. It is fast because
   //*the client doesn't do anything anymore.
   const ticket = await getTicket((await params).ticketId);

   if (!ticket) {
      return (
        <Placeholder
          label="Ticket not found"
          button={
            <Button asChild variant="outline">
              <Link href={ticketsPath()}>Go to Tickets</Link>
            </Button>
          }
        />
      );
    }

   return (
    // <div>
    //   <p className="txt-lg"> {ticket.title}</p>
    //   <p className="txt-lg"> {ticket.content}</p>
    //  </div>

     //* reuse TicketItem.tsx here.
     //* Add a isDetail prop to let Ticketitem is coming 
     //* from individual TicketPage (not TicketsPage). Add 
     //* isDetail to TicketItemProps in TicketItem component

     //* Now go to TicketsPage and add "ticket" as prop so that
     //* isDetail bool can be passed as prop
     <div className="flex justify-center animate-fade-in-from-top">
       <Ticketitem ticket={ticket} isDetail />
     </div>
   )

}

export default TicketPage;  