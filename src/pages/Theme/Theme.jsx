import { motion } from "framer-motion";
import themeImg from "../../assets/images/theme.png";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";

export default function Theme() {
  return (
    <div className="min-h-screen bg-base-100">
      <ParallaxHero backgroundImage={themeImg} dim={false} />

      <div className="max-w-4xl px-6 py-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-medium space-y-4 prose prose-lg max-w-none"
        >
          <h2 className="text-4xl font-bold text-center text-primary">
            Currents of Consequence: The Might of Small Deeds
          </h2>
          <div className="divider" />
          <p>
            The butterfly effect reminds us that the smallest actions, good or
            bad, can set off vast chains of events. A single word, a habit, or a
            choice that seems insignificant in the moment can ripple outward,
            shaping people, communities, and even history. Those ripples may
            flow gently in streams, or surge forward as floods, their final
            impact unknown. Yet over time, streams cut valleys, rivers carve
            canyons, and tides reshape entire coastlines. Do our actions have
            the same effect?
          </p>

          <p>
            The immense power of a seemingly small act is illustrated in the
            story of Prophet Musa (peace be upon him) in{" "}
            <a
              href="https://quran.com/al-qasas"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Surah al-Qasas
            </a>
            . His mother’s decision to trust in God and cast her infant into the
            Nile became the tide that turned a tyrant. One small ripple set into
            motion Musa’s upbringing in the Pharaoh&apos;s palace, preparing him
            to one day stand against oppression with truth and conviction.
          </p>

          <p>
            Just as one decision can lead to unexpected good, the principle of
            action and consequence also means that negative acts can result in a
            cascade of devastating effects. Abu Huraira reported that the
            Prophet Muhammad (peace and blessings be upon him) said, “Verily,
            when the servant commits a sin, a black mark appears upon his heart.
            If he abandons the sin, seeks forgiveness, and repents, then his
            heart will be polished. If he returns to the sin, the blackness will
            be increased until it overcomes his heart” (
            <a
              href="https://sunnah.com/tirmidhi:3334"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Tirmidhī 3334
            </a>
            ). Careless actions, hurtful words, wasted time, and neglected
            responsibilities can unearth dangerous sinkholes, but repentance
            offers a path to pull oneself out.
          </p>

          <p>
            In today’s world of instant gratification, small deeds may feel
            insignificant, and change may feel too slow. But Islam teaches that
            transformation is built on consistency, patience, and trust in Al
            Wakeel, the trustee and disposer of affairs.{" "}
            <a
              href="https://quran.com/hud"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Surah al-Hud
            </a>{" "}
            tells how Prophet Nuh (peace be upon him) built his ark while people
            mocked him. Although each plank hammered seemed meaningless to
            others, when devastating floods came, those small steps became
            salvation for humanity. Every prayer, every act of kindness, every
            contribution to justice is a drop in an ocean of barakah, blessings
            that endure and multiply over time.
          </p>

          <p>
            The choices you make today may become the tide someone else rides
            tomorrow. Alternatively, you may be stationed at the center or end
            of a wave set off by others’ actions. What ripple will you create?
            How do you ensure your actions contribute to positive growth? How do
            you take accountability for your role in a chain of events, when the
            outcome is positive, and when it is negative?
          </p>
          <div className="divider" />
          <p className="text-lg font-medium">
            We encourage you to creatively explore these concepts and more in
            Regional and National competitions and workshops during MIST 2026.
            Remember that unique projects displaying creativity and insight will
            be judged most favorably.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
