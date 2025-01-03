
//"useClient";
//*First import from next-themes. Since our own provider's
//*is named ThemeProvider we rename next-theme provider as
//* as BaseThemeProvider.
//* the ThemeProvider as BaseThemeProvider is a good way of encapsulating
//* that has configuration for NextThemes provider on one file, without leaking
//*the configuration which comes from Next's 2 other files

//* After your done go to RootLayout file which sits in the app/layout.tsx
import { ThemeProvider as BaseThemeProvider } from "next-themes";

//*type props called ThemeProviderProps
type ThemeProviderProps = {
  children: React.ReactNode; //*Where ReactElement only represents JSX, 
                             //* ReactNode represents everything that can be rendered.
};

//* we define our own provider. Then type the children as ThemeProviderProps
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  console.log("Where am i executing? ThemeProvider");
  return (
    <BaseThemeProvider
      //*add configuration for the theme provider coming fron NextThemes
      attribute="class"
      defaultTheme="system" //*operating system is default
      enableSystem          //*enable the system
      // disableTransitionOnChange
    >
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };