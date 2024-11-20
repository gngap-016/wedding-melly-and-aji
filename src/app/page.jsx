import styles from "./page.module.css";
import Waves from "@/components/waves/Waves";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Person from "@/components/person/Person";
import EventComponent from "@/components/event/Event";
import Galery from "@/components/galery/Galery";
import Footer from "@/components/footer/Footer";
import Audio from "@/components/audio/Audio";
import Quotes from "@/components/quotes/Quotes";
import Gift from "@/components/gift/Gift";

export default function Home() {
  return (
    <main className={styles.main}>
      <Audio />
      <Waves />
      <Hero />
      <Quotes />
      <Person />
      <EventComponent />
      <Galery />
      <Gift />
      <Footer />
      {/* <Navbar /> */}
    </main>
  );
}
