import Link from "next/link";
import { ticketsPath } from "@/paths";
import { Heading } from "@/components/heading";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">

      {/* //*Heading is a reusable component. We can reuse this in TicketsPage.tsx */}
      < Heading title="Home" description="Your home sweet home"/>
      
      {/* Add a link that goes from homepage to ticketpage */}
      {/* Using path constants href={ticketsPath() see paths.ts */}

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;