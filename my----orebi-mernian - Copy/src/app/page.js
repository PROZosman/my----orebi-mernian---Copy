import Hero from "@/components/Hero/Hero";
import { Layout } from "@/components/Layout/Layout";
import Newarrival from "@/components/Newarrival/Newarrival";
import { Newarrival2 } from "@/components/Newarrival2/Newarrival2";
import TimePart from "@/components/TimePart/TimePart";

export default function Home() {
  return (
    <Layout>
     <Hero />
     <Newarrival />
     <Newarrival2 />
     <TimePart />
    </Layout>


  )
}
