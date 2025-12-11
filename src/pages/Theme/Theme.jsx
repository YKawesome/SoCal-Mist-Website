import { motion } from "framer-motion";
import themeImg from "../../assets/images/2025theme.png";
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
          className="prose prose-lg max-w-none"
        >
          <p>
            Islam places a profound emphasis on knowledge, considering it an essential virtue that enriches the mind, nurtures the soul, and allows for personal growth. The Prophet Muhammad (peace and blessings be upon him) said, &quot;Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.&quot; (<a href="https://sunnah.com/tirmidhi:2646" target="_blank" rel="noopener noreferrer" className="link link-primary">Tirmidhi</a>).
          </p>

          <p>
            However, before embarking on a path seeking knowledge, scientists and scholars alike must look inward to cultivate humility and sincerity, allowing them to receive knowledge with open hearts and minds, ready to absorb its wisdom and act upon its truths. Muslims often find inspiration from the first Quranic revelation to Prophet Muhammad (peace and blessings be upon him) to always seek God&apos;s guidance while pursuing knowledge: &ldquo;Read! In the name of your Lord who has created (all that exists)&rdquo; (<a href="https://quran.com/en/al-alaq/1" target="_blank" rel="noopener noreferrer" className="link link-primary">Quran 96:1</a>).
          </p>

          <p>
            With the right intentions, the pursuit of spiritual and worldly knowledge paves the way for deeper faith and wisdom. Generations of scholars such as Fatima Al-Fihri, Al Biruni, and Ibn al-Haytham who excelled in mathematics, science, and philosophy, sought knowledge with the conviction that pursuing truth and understanding is an act of devotion to the Creator. These titans contributed positively to the world by passing on what they knew following the example of the Prophet (peace and blessings be upon him) who said, &ldquo;Whoever teaches some knowledge will have the reward of the one who acts upon it, without that detracting from his reward in the slightest&rdquo; (<a href="https://sunnah.com/ibnmajah:240" target="_blank" rel="noopener noreferrer" className="link link-primary">Ibn Majah</a>).
          </p>

          <p>
            Acquiring knowledge comes with a duty to act, by implementing and sharing it responsibly. With time and effort, the spread of knowledge can lead to stronger advocacy in favor of important causes and more efficient or productive systems. This shared knowledge also reinforces collective values, promoting unity and a sense of purpose among those who are committed to the common good. The effort we invest in spreading knowledge thus becomes a crucial part of building stronger, more informed, and more engaged communities, which can be our legacy in the world.
          </p>

          <div className="p-8 my-8 border-l-4 bg-base-200 rounded-xl border-primary">
            <h3 className="mt-0 mb-4 text-2xl font-bold">Reflection Questions</h3>
            <ul className="pl-6 space-y-2 list-disc">
              <li>How do you seek knowledge, and what is your role in spreading it further?</li>
              <li>How are your decisions, values and beliefs shaped by what you know?</li>
              <li>How do you stay motivated to learn despite hitting barriers?</li>
              <li>What role does humility play in pursuing and teaching knowledge?</li>
              <li>How do you navigate situations where the knowledge you possess conflicts with your community?</li>
            </ul>
          </div>

          <p className="text-lg font-medium">
            We encourage you to creatively explore these concepts and more in Regional and National competitions and workshops during MIST 2025. Remember that unique projects displaying creativity and insight will be judged most favorably.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
