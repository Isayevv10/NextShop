import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@schemas";
import { msTheme } from "@src/app/theme";
import StudioNavbar from "@src/components/StudioNavbar";
import { Config } from "sanity";
import { deskTool } from "sanity/desk";

export const config: Config = {
  name: "default",
  title: "MS BUY",
  projectId: "4ctrd9d6",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: msTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
};
