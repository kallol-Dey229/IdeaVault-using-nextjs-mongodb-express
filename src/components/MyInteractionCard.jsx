'use client'

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const MyInteractionCard = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const [interaction, setInteraction] = useState(null);



    useEffect(() => {

        if (user?.id) {
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-interactions/${user.id}`).then(res => res.json())
            .then(data => setInteraction(data));

        }

    }, [user]);



    return (

        <div className="min-h-screen bg-cyan-50 py-10 px-4">
            <div className="mx-auto max-w-5xl rounded-md bg-cyan-50 shadow-xl p-8">

                <div className="text-center">

                    <h2 className="text-3xl font-bold text-cyan-700">All Interactions</h2>

                    <p className="mt-2 text-cyan-600">View your activity</p>

                </div>



                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-md bg-cyan-50 p-6 shadow">

                        <h3 className="text-lg font-semibold text-cyan-700">Total Comments
                        </h3>

                        <p className="mt-4 text-3xl font-bold text-cyan-800">

                            {
                                interaction?.totalComments
                            }

                        </p>

                    </div>



                    <div className="rounded-md bg-cyan-50 p-6 shadow">

                        <h3 className="text-lg font-semibold text-cyan-700">Total Interactions
                        </h3>

                        <p className="mt-4 text-3xl font-bold text-cyan-800">

                            {
                                interaction?.totalInteractions
                            }

                        </p>

                    </div>

                </div>



                <div className="mt-10 rounded-md bg-cyan-50 p-6">

                    <h3 className="text-xl font-semibold text-cyan-700 mb-5">Recent Activities</h3>



                    <div className="space-y-4">

                        {
                            interaction?.recentComments?.map(comment => (

                                        <div
                                            key={comment._id} className="bg-cyan-50 p-4 space-y-4 rounded-md shadow-md">

                                            <p className="text-cyan-700 font-bold">{comment.ideaTitle}</p>
                                            <p className="text-cyan-600">{comment.comment}</p>

                                            <p className="text-sm text-slate-500 mt-1">

                                                {

                                                    new Date(comment.createdAt).toLocaleDateString()

                                                }

                                            </p>

                                        </div>

                                    )
                                )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default MyInteractionCard;