import Chart from "@/components/Charts/Chart"
import Header from "@/components/header"
import Profile from "@/components/profile"
import { prisma } from "@/lib/prisma";
import type { Ranking } from "@/lib/types"

/** The function is asynchronous because it is fetching data server-side */
export default async function Page() {
    const { university, rankings } = await getData();
    
    return (
        <main className="flex flex-col min-h-screen">
            <Header uniName={university?.name || ""} uniLogo={university?.logoUrl || ""} />

            <section className="flex-1 border-grid flex items-stretch justify-center">
                <div className="container flex flex-col lg:flex-row items-stretch gap-6 px-4 py-6">
                    {/* University Info Section */}
                    <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
                        <Profile uniName={university?.name || ""} uniDetails={university} />
                    </div>

                    {/* Chart Section */}
                    <div className="w-full lg:w-1/3">
                        <Chart uniRankingData={rankings} />
                    </div>
                </div>
            </section>
        </main>
    )
}

/** This function fetches the university and its rankings from trpc */ 
async function getData() {
    const university = await prisma.university.findFirst(); // there is only 1 uni
    let rankings: Ranking[] = [];

    if (university) {
        rankings = await prisma.ranking.findMany({
            where: { universityId: university.id },
            orderBy: { year: "asc" },
        });
    }

    return { university, rankings };
}
