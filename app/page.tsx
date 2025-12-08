'use client';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Blog } from '@/components/blog';
import { About } from '@/components/about';
import { Client } from '@/components/client';
import { Insight } from '@/components/insight';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  //   }
  // };
  
  return (
    <>
      <Header/>
      <Intro/>
      <Blog/>
      <About/>
      <Client/>
      <Insight/>
      <Contact/>
      <Footer/>
    </>
  );
}