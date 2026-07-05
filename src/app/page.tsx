import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <Container>
      <Hero />

      <Services />

      <Process />

      <About />

      <Contact />
    </Container>
  );
}
