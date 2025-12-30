import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { categories } from "./content";

export function useNavigation() {
  const router = useRouter();

  function handleExplore(){
    router.push("/services");
  };

  function handleContact(){
    router.push("/contact");
  };

  function handleService(category: string, service: string){
    const services = slugify(service);
    router.push(`/services/${category}/${services}`);
  };
  function handleGetit(category: string, service: string) {
    const serviceSlug = slugify(service);
    router.push(`/services/${category}/${serviceSlug}`);
  }

  function handleAbout() {
    router.push("/about");
  }

  return { handleExplore, handleContact, handleService,handleGetit,handleAbout };
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type SendEmail = {
  name?: string;
  email?: string;
  phone?: number | string;
  message?: string;
  service?:string;
  category?:string;
  title?: string;
};

export async function sendEmail(data: SendEmail) {
  const results = await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      service:data.service,
      category:data.category,
      title: data.title,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
  return { text: results.text };
}
