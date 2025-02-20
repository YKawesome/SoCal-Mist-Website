import PageHeader from '../../components/PageHeader/PageHeader';
import BoardData from './BoardData';
import images from '../../utils/preloadimages';

// A simple Card component for a board member.
const Card = ({ member }) => {
    // Convert the member's name into the key format (e.g. "Yousef Khan" -> "Yousef_Khan.jpeg")
    const imageKey = member.name.split(" ").join("_") + '.jpeg';
    const imageSrc = images[imageKey];

    return (
        <div className="card bg-base-100 shadow-md w-full">
            <figure className="px-10 pt-10 pb-2 xs:pb-0">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={member.name}
                        className="mask mask-squircle h-48"
                    />
                ) : (
                    <div className="mask mask-squircle h-48 skeleton min-h-48 min-w-48"></div>
                )}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{member.name}</h2>
                <p>{member.role}</p>
            </div>
        </div>
    );
};

// Helper function for large screens chunking remains unchanged.
function chunkMembers(members) {
    const rows = [];
    const copy = [...members];
    if (copy.length <= 3) {
        rows.push(copy);
    } else {
        if (copy.length % 3 === 1) {
            rows.push(copy.splice(0, 2));
        } else if (copy.length % 3 === 2 && copy.length > 2) {
            rows.push(copy.splice(0, 2));
        }
        while (copy.length) {
            rows.push(copy.splice(0, Math.min(3, copy.length)));
        }
    }
    return rows;
}

function Board() {
    return (
        <div>
            <PageHeader title="E-Board" />

            <div
                class="hero lg:h-[100vh] md:h-[50vh] sm:h-[40vh] h-[30vh]"
                style={{
                    backgroundImage: `url(${images["Board_Main.jpeg"]})`,
                }}>
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                </div>
            </div>

            <div className="bg-base-200 p-4">
                <div className="w-[80%] mx-auto">
                    {BoardData.map((committee, idx) => {
                        const members = committee.members;
                        // Exactly 2 members: special layout.
                        if (members.length === 1) {
                            return (
                                <div key={idx} className="my-8">
                                    <h2 className="text-4xl font-semibold mb-6 text-center">{committee.committee}</h2>
                                    <div className="flex justify-center">
                                        <div className="w-full">
                                            <Card member={members[0]} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        else if (members.length === 2) {
                            return (
                                <div key={idx} className="my-8">
                                    <h2 className="text-4xl font-semibold mb-6 text-center">{committee.committee}</h2>
                                    {/* Large screens: two side by side */}
                                    <div className="hidden lg:flex justify-center gap-4">
                                        {members.map((member, i) => (
                                            <div key={i} className="w-1/2">
                                                <Card member={member} />
                                            </div>
                                        ))}
                                    </div>
                                    {/* md and small screens: grid layout */}
                                    <div className="lg:hidden">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {members.map((member, i) => (
                                                <Card key={i} member={member} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            // More than 2 members: check for Chair.
                            const chair = members.find((member) => member.role === "Chair");
                            const others = chair
                                ? members.filter((member) => member.role !== "Chair")
                                : members;
                            return (
                                <div key={idx} className="my-8">
                                    <h2 className="text-4xl font-semibold mb-6 text-center">{committee.committee}</h2>
                                    {/* Chair always takes full width */}
                                    {chair && (
                                        <div className="flex justify-center mb-4">
                                            <div className="w-full">
                                                <Card member={chair} />
                                            </div>
                                        </div>
                                    )}
                                    {/* Large screens layout (lg and up) */}
                                    <div className="hidden lg:block">
                                        {chunkMembers(others).map((row, rowIdx) => (
                                            <div key={rowIdx} className="flex justify-center gap-4 my-4">
                                                {row.map((member, mIdx) => (
                                                    <div
                                                        key={mIdx}
                                                        className={row.length === 2 ? "w-1/2" : "w-1/3"}
                                                    >
                                                        <Card member={member} />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                    {/* md and small screens layout using grid */}
                                    <div className="lg:hidden">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {others.map((member, i) => (
                                                <Card key={i} member={member} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default Board;