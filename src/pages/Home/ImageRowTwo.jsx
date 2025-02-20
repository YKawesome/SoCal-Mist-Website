import images from "../../utils/preloadimages";

function ImageRowTwo() {
    const c1 = images["homer2c1.png"];
    const c2 = images["homer2c2.png"];
    const c3 = images["homer2c3.png"];
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="rounded-box shadow-md">
                    <img src={c1} alt="Row 1 Col 1" />
                </div>
                <div className="rounded-box shadow-md">
                    <img src={c2} alt="Row 2 Col 2" />
                </div>
                <div className="rounded-box shadow-md">
                    <img src={c3} alt="Row 2 Col 3" />
                </div>
            </div>
        </>
    )
}

export default ImageRowTwo;