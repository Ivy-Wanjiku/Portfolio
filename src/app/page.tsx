import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Exploring } from "@/components/sections/exploring";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

export default function HomePage() {
  return <main><Hero /><About /><Journey /><Work /><Skills /><Exploring /><Contact /></main>;
}
