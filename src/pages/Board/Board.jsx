import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import bg from "../../assets/images/joinus.png";
import BoardRoster from "./BoardRoster";

export default function Board() {
    return (
        <>
            <ParallaxHero backgroundImage={bg}>
                <div className="max-w-md text-center">
                    <h1 className="mb-5 text-5xl font-bold text-white">Our E-Board</h1>
                    <p className="mb-5 text-lg text-gray-200">
                        Meet the dedicated individuals leading SoCal MIST 2025.
                    </p>
                </div>
            </ParallaxHero>

            <BoardRoster />
        </>
    )
}
