import { Button } from "@heroui/react";
import Image from "next/image";

const IdeaDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:8000/idea/${id}`);
    const idea = await res.json();

    const { _id, title, detailedDescription, estimatedBudget, targetAudience, imageURL, problemStatement, proposedSolution } = idea;

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










            <div className="mx-auto mt-10 max-w-5xl rounded-3xl bg-white p-6 shadow-lg">

                <div className="mb-6">

                    <h2 className="text-2xl font-bold text-gray-700">
                        Comments
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Share your feedback and suggestions
                    </p>

                </div>

                <div className="space-y-4">

                    <div className="rounded-2xl bg-cyan-50 p-4">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white font-semibold">
                                P
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700">
                                    Partha
                                </h3>

                                <p className="text-xs text-gray-500">
                                    2 hours ago
                                </p>
                            </div>

                        </div>

                        <p className="mt-3 text-gray-600">
                            Great idea. The proposed solution looks promising.
                        </p>

                    </div>

                    <div className="rounded-2xl bg-cyan-50 p-4">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white font-semibold">
                                A
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700">
                                    Alex
                                </h3>

                                <p className="text-xs text-gray-500">
                                    Yesterday
                                </p>
                            </div>

                        </div>

                        <p className="mt-3 text-gray-600">
                            Consider adding more details about implementation cost.
                        </p>

                    </div>

                </div>

                <div className="mt-8">

                    <textarea
                        placeholder="Write your comment..."
                        className="min-h-32 w-full rounded-2xl border border-cyan-100 bg-cyan-50 p-4 outline-none focus:border-cyan-400"
                    />

                    <Button className="mt-4 rounded-sm bg-cyan-500 px-6 py-3 text-white transition hover:bg-cyan-600">
                        Add Comment
                    </Button>

                </div>

            </div>

        </div>
    );
};

export default IdeaDetailsPage;