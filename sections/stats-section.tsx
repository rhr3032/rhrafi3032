import CountUp from "@/components/count-number";

export default function StatsSection() {
    return (
        <section className="border-y border-gray-200 py-10 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={4} />+
                    </h2>
                    <p className="text-gray-500">Years delivering UI/UX for web and mobile</p>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={320} />+
                    </h2>
                    <p className="text-gray-500">Projects shipped with cross-functional teams</p>
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-4xl font-semibold font-urbanist">
                        <CountUp from={0} to={95} />%
                    </h2>
                    <p className="text-gray-500">Client satisfaction rate</p>
                </div>
            </div>
        </section>
    )
}