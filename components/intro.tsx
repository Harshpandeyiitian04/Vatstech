import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function Intro() {
    const router = useRouter()
    
    function handleExplore(){
        router.push('/services')
    }
    return (
        <>
            {/* Hero Section - Blue Theme */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F4FA] via-white to-[#F0F9FF] py-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-7xl md:text-7xl font-bold text-[#0A2240] mb-6">
                            Your Trusted Digital Partner for Business Growth
                        </h1>
                        <p className="text-2xl text-gray-600 mb-10 max-w-1000 mx-auto">
                            <span>A multi-service company dedicated to empowering individuals, entrepreneurs, and organizations to thrive in today's competitive business landscape through comprehensive business solutions across India.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button size="default" className="bg-[#00A8E8] hover:bg-[#0095D1] text-white font-bold text-lg px-10 h-14 " onClick={handleExplore}>
                                Explore Services
                            </Button>
                            <Button size="default" variant="outline" className="border-[#00A8E8] text-[#00A8E8] hover:bg-[#e4eef2] hover:text-[#00A8E8] h-14">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}