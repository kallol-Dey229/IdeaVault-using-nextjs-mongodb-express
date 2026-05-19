'use client'

import { authClient } from "@/lib/auth-client";
import IdeaCard from "@/components/IdeaCard";
import { useEffect, useState } from "react";

const MyIdeasCard = () => {

    const { data:session } = authClient.useSession();

    const user = session?.user;

    const [ideas,setIdeas] = useState([]);

    useEffect(()=>{

        if(user?.email){

            fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/my-ideas/${user.email}`
            )
            .then(res=>res.json())
            .then(data=>setIdeas(data))

        }

    },[user])

    return (

        <div className="mt-10">

            <h2 className="mb-8 text-3xl font-bold text-cyan-700">
                My Ideas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    ideas.map(
                        idea=>(
                            <IdeaCard
                              key={idea._id}
                              idea={idea}
                            />
                        )
                    )
                }

            </div>

        </div>

    );
};

export default MyIdeasCard;