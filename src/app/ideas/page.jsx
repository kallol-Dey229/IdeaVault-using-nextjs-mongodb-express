import IdeaCard from "@/components/IdeaCard";


const IdeasPage = async () => {
    const res = await fetch('http://localhost:8000/idea');
    const ideas = await res.json();
    return (
        <div className="grid grid-cols-4 gap-4 mt-10">
            {
                ideas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)
            }
        </div>
    );
};

export default IdeasPage;