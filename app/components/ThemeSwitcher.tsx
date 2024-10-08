import { MoonIcon } from "@/app/components/icons/MoonIcon";
import { SunIcon } from "@/app/components/icons/SunIcon";
import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher(props: any) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = theme === "light";

  const changeTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <Switch
      size="lg"
      color="success"
      checked={isLight}
      onChange={changeTheme}
      thumbIcon={isLight ? <SunIcon /> : <MoonIcon />}
      {...props}
    />
  );
}
