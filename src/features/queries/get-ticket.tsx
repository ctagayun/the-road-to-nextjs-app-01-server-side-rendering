import { initialTickets } from "@/data"
import { Ticket } from "../types";


export const getTicket = async (ticketId: string): Promise<Ticket | null> => {

   await new Promise ((resolve) => setTimeout(resolve,2000)) //*artificial delay. comment it out anytime you want

   //*maybeTicket because the provided ticket id might be non-existent
   const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);
   return new Promise((resolve) => {
      resolve(maybeTicket || null);
   })
}