import { initialTickets } from "@/data";
import { Ticket } from "../types";

//*this function returns a promise of array of Tickets
export const getTickets = async() : Promise<Ticket[]> => {
 
  //* set artificial delay time for promise to resolve. this is a better way of doing it.
  await new Promise ((resolve) => setTimeout(resolve, 2000) );

  //*resolve the promise
  return new Promise((resolve) => {
     resolve (initialTickets);
  });
};

//*Use this function in TicketPages.tsx