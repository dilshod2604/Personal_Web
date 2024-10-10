import { IconType } from "react-icons/lib";

export interface ProjectTools {
  name: string;
  description: string;
  tools: string[];
  links: ToolLink[];
}

interface ToolLink {
  name: string;
  link: string;
  icon: IconType;
}
