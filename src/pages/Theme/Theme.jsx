import PageHeader from "../../components/PageHeader/PageHeader";
import images from "../../utils/preloadimages";

function Theme() {
    const themeImage = images["2025theme.png"];
    return (
        <>
            <div className="lg:hidden">
                <PageHeader title="Theme" />
            </div>
            <div
                className="hero lg:h-[92vh] h-[50vh]"
                style={{
                    backgroundImage: `url(${themeImage})`,
                }}>
                <div className="hero-content text-neutral-content text-center">
                </div>
            </div>
            <div className="bg-base-200 text-base-content h-full py-10 items-center">
                <div className="lg:max-w-3xl max-w-xs text-left mx-auto">
                    <p>
                        Islam places a profound emphasis on knowledge, considering it an
                        essential virtue that enriches the mind, nurtures the soul, and
                        allows for personal growth. The Prophet Muhammad (peace and
                        blessings be upon him) said, "Whoever takes a path upon which to
                        obtain knowledge, Allah makes the path to Paradise easy for
                        him." (<a className="link link-primary" href="https://sunnah.com/tirmidhi:2646">Tirmidhi</a>).
                    </p>
                    <br />
                    <p>
                        However, before embarking on a path seeking knowledge,
                        scientists and scholars alike must look inward to cultivate
                        humility and sincerity, allowing them to receive knowledge with
                        open hearts and minds, ready to absorb its wisdom and act upon
                        its truths. Muslims often find inspiration from the first
                        Quranic revelation to Prophet Muhammad (peace and blessings be
                        upon him) to always seek God's guidance while pursuing
                        knowledge: “Read! In the name of your Lord who has created (all
                        that exists)” (<a className="link link-primary" href="https://quran.com/en/al-alaq/1">Quran 96:1</a>).
                    </p>
                    <br />
                    <p>
                        With the right intentions, the pursuit of spiritual and worldly
                        knowledge paves the way for deeper faith and wisdom. Generations
                        of scholars such as Fatima Al-Fihri, Al Biruni, and Ibn
                        al-Haytham who excelled in mathematics, science, and philosophy,
                        sought knowledge with the conviction that pursuing truth and
                        understanding is an act of devotion to the Creator. These titans
                        contributed positively to the world by passing on what they knew
                        following the example of the Prophet (peace and blessings be
                        upon him) who said, “Whoever teaches some knowledge will have
                        the reward of the one who acts upon it, without that detracting
                        from his reward in the slightest” (<a className="link link-primary" href="https://sunnah.com/ibnmajah:240">Ibn Majah</a>).
                    </p>
                    <br />
                    <p>
                        Acquiring knowledge comes with a duty to act, by implementing
                        and sharing it responsibly. With time and effort, the spread of
                        knowledge can lead to stronger advocacy in favor of important
                        causes and more efficient or productive systems. This shared
                        knowledge also reinforces collective values, promoting unity and
                        a sense of purpose among those who are committed to the common
                        good. The effort we invest in spreading knowledge thus becomes a
                        crucial part of building stronger, more informed, and more
                        engaged communities, which can be our legacy in the world.
                    </p>
                    <br />
                    <p>
                        How do you seek knowledge, and what is your role in spreading it
                        further? How are your decisions, values and beliefs shaped by
                        what you know? How do you stay motivated to learn despite
                        hitting barriers? What role does humility play in pursuing and
                        teaching knowledge? How do you navigate situations where the
                        knowledge you possess conflicts with your community?
                    </p>
                    <br />
                    <p>
                        We encourage you to creatively explore these concepts and more
                        in Regional and National competitions and workshops during MIST
                        2025. Remember that unique projects displaying creativity and
                        insight will be judged most favorably.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Theme;