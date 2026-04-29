import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stack from "@/components/sections/Stack";
import Projets from "@/components/sections/Projets";
import Parcours from "@/components/sections/Parcours";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
  <Navbar />
  <Hero />
  <Stack />
  <Projets />
  <Parcours />
</main>
  );
}