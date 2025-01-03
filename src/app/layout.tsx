import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
;


const inter = Inter ({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "The road to Next",
  description: "My road to Next application",
};

//*The RootLayout is good for rendering headings and navigation
//*for the whole application
export default function RootLayout({
  children, //*children prop
}: Readonly<{
  children: React.ReactNode; //*Where ReactElement only represents JSX, 
                             //* ReactNode represents everything that can be rendered.
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        {/* //*Wrap the Header and Main inside the our custom ThemeProvider component */}
        <ThemeProvider>
        {/* //*anything between  Header and Main are rendered as children.
            //* So all the pages, the TicketsPages and TicketPage, and so on,
            //* in between because we are using as "children" prop. So now when 
            //* I reload this tickets page the login is happening in the server-side.
            //*This is expected because the ThemeProvider has no client directive
            //*and none ofthe parent components has a useClient directive. That's 
            //*doing the reloading on the server.
        */}
            {/* //*This is Component Composition Pattern. It is a design pattern
                //* that allows us to have Server Components with Client 
                //*components as ancestor
            */}
            <Header />
            <main   className="
                  min-h-screen flex-1
                  overflow-y-auto overflow-x-hidden
                  py-24 px-8
                  bg-secondary/20
                  flex flex-col
                ">{children} 
              </main>
              </ThemeProvider> 
      </body>
    </html>
  );
}
