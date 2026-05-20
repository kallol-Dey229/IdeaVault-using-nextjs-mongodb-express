import IdeaCard from "@/components/IdeaCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const IdeasPage = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(

        `${process.env.NEXT_PUBLIC_SERVER_URL}/idea`,

        {
            cache:"no-store",

            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );

    const ideas = await res.json();

    if(!Array.isArray(ideas)){
        return <p className="text-center mt-10">Failed to load ideas</p>
    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mx-5">

            {
                ideas.map((idea)=>(

                    <IdeaCard
                        key={idea._id}
                        idea={idea}
                    />

                ))
            }

        </div>

    );
};

export default IdeasPage;