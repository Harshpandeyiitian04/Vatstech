import { servicesData } from "@/lib/servicescontent";
import { slugify } from "@/lib/slugify";
import ServiceSlugPage from "./ServiceSlugPage";

export async function generateStaticParams() {
    const params: { slug: string[] }[] = [];
    
    // Generate paths for all categories and services
    Object.keys(servicesData).forEach(categorySlug => {
        const category = servicesData[categorySlug];
        
        // Add category path
        params.push({ slug: [categorySlug] });
        
        // Add service paths
        category.services.forEach(service => {
            params.push({ 
                slug: [categorySlug, slugify(service.name)] 
            });
        });
    });
    
    return params;
}

export default function Page() {
    return <ServiceSlugPage />;
}