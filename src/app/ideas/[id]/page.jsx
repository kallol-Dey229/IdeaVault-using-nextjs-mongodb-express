import Image from "next/image";

const IdeaDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:8000/idea/${id}`);
    const idea = await res.json();

    const { _id, title, detailedDescription, estimatedBudget, targetAudience, imageURL, problemStatement,proposedSolution } = idea;

    return (
        <div className="min-h-screen bg-cyan-50/40 py-10 px-4">

            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg">

                <div className="grid md:grid-cols-2">

                    <div className="relative h-72 md:h-full min-h-87.5">

                        <Image
                            src={imageURL}
                            alt={title}
                            fill
                            className="object-cover"
                        />

                    </div>

                    <div className="flex flex-col justify-center p-6">


                        <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
                            {title}
                        </h1>

                        <p className="mt-5 text-slate-600 leading-7">
                           <span className="font-semibold">Detail:</span> {detailedDescription}
                        </p>
                        <p className="mt-5 text-slate-600 leading-7">
                            <span className="font-semibold">Problem:</span> {problemStatement}
                        </p>
                        <p className="mt-5 text-slate-600 leading-7">
                            <span className="font-semibold">Proposed Solution:</span> {proposedSolution}
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="rounded-2xl bg-cyan-50 p-4">

                                <p className="text-sm text-slate-500">
                                    <span className="font-semibold">Estimated Budget:</span>
                                </p>

                                <h3 className="mt-1 text-xl font-bold text-cyan-700">
                                    ${estimatedBudget}
                                </h3>

                            </div>

                            <div className="rounded-2xl bg-cyan-50 p-4">

                                <p className="text-sm text-slate-500">
                                    <span className="font-semibold">Target Audience:</span>
                                </p>

                                <h3 className="mt-1 text-lg font-semibold text-cyan-700">
                                    {targetAudience}
                                </h3>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default IdeaDetailsPage;