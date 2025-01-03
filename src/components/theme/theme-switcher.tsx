"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LucideMoon, LucideSun } from "lucide-react";

//* In Next.js every component is server component by default and
//*server components cannt use Hooks or assign event handlers. 

//* To make a component a client component and use event handlers
//* use a directive called: "use client"

//*Create ThemeSwitcher hook
//*https://www.robinwieruch.de/react-hooks/
const ThemeSwitcher = () =>
{
    //*theme is the current theme
    //*theme = state variable
    //*setTheme is the updater function
    //*useTheme is a hook that manages the state of the theme
    //* https://lucide.dev to get lucide icons
    const {theme, setTheme} = useTheme();

    return (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        > 
          {/* //* Conditionally render the icons light and dark*/}
          <LucideSun
            className="
              h-4 w-4 rotate-0 scale-100 transition-all
              dark:-rotate-90 dark:scale-0
            "
          />
          {/* //*Icon for dark. come with same width and height as LucidSun */}
          <LucideMoon
            className="
              absolute h-4 w-4 rotate-90 scale-0 transition-transform
              dark:rotate-0 dark:scale-100
             "
          />
          {/* //*toggles the theme */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      );
    };

export{ ThemeSwitcher };