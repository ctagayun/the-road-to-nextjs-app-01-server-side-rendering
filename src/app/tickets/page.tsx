//*============================================
//*Server-side component version of TicketsPage
//* Review:https://rwieruch.teachable.com/courses/the-road-to-next/lectures/53956417
//*============================================
import { Heading } from "@/components/heading";
import { getTickets } from "@/features/queries/get-tickets";
import { Ticketitem } from "@/features/ticket/components/ticket-item";

//*You can't use "async" in client-side component
//*So you maybe wondering what's the difference then of client to the
//*server-component: server-components can access server-side code.
//*The getTickets for instance could be afunction that accesses a databse.
//*directly. In a client component not possible. You would have to some
//*API call to some REST API or GraphQL API. Because server-component runs 
//*in the server, you have direct access to the database.
const TicketsPage = async () => {
  //*In server-side "tickets" are already typed. In server-side you just 
  //*call the function. You would have some sort REST where you would 
  //*have to do some type'ings on top of something like OpenAPI for instance
  const tickets = await getTickets();

  //*Then it returns our JSX. JSX that is the other advantage of server-side 
  //*component, it doesn't return a reg component in the end to the client.
  //*the client only receives the output so there is longer need interaction with javascript
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {/* //*because "tickets" is already typed, you can directly use it here */}
        {tickets.map((ticket) => (
          <Ticketitem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;


//*==============================================
//*Client-side component version of TicketsPages
//*==============================================
// "use client";
//  import { Heading } from "@/components/heading";
// import { Ticketitem } from "@/features/ticket/components/ticket-item";
// import { useEffect, useState } from "react";
// import { Ticket } from "@/features/types";
// import { getTickets } from "@/features/queries/get-tickets";

// const TicketsPage = () => {

  //*this useEffect runs only once because dependency array "[] is empty 
  //*do the data fetching here
  // useEffect(() => {
  //    const fetchTickets = async () => {
  //       const result = await getTickets();

  //       setTickets(result); //*in the end this stores value into state variable "tickets"
  //    }
  //    fetchTickets();
  //  }, []);

  //* fetch data. to fetch data you need create a useState hook.
  //* import Ticket from types
  //*https://www.robinwieruch.de/react-usestate-hook/
  //*note: useState returns an array

  // const [tickets, setTickets] = useState<Ticket[]>([]);

  // return (
    //*add animate-fade-in-from-top that we created in tailwind.config.ts
    // <div className="flex-1 flex flex-col gap-y-8">
    //      < Heading title="Tickets" description="All your tickets in one page"/>

          //*map generates a new array to variable called "ticket"
         //*Within the map() method, we have access to each object and properties of "ticket"
         //*since we are listing records in a div, the div must have a key like when
         //*we are listing stuff in a UL

        //*add animate-fade-from-top (prefix with "animate") that we created in tailwind.config.ts
        //*this will cause the ticket items in TicketPage to fade in and out

      //  */}

      //* <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
          //*  For each ticket we want to return a <Card> displaying title and a link
          //*   className="w-full max-w-[420px] is for responsiveness when weresize 
          //*the page.
          //* The rendering of tickets is done in a TicketItem component
          //* add ticket as prop so that isDetail can be accesed in TicketPage
          //* Now go to TicketItem and use isDetail for conditional rendering
        //*   <Ticketitem key={ticket.id} ticket={ticket} />
        //* ))}
//*       </div>
// *    </div>
//*   );
//* };


//* export default TicketsPage;

//useState
 //By using useState, we are telling React that we want to have a 
 //stateful value which changes over time. And whenever this stateful value 
 //changes, the affected components (here: TicketItem component) 
 //will re-render to use it (here: to display the recent value).

  //concatenating variables into a string
 //var fullName = `${firstName} ${lastName}`
 //console.log(fullName);