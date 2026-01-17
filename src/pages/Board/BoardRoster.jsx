
import { motion } from "framer-motion";
import { boardData } from "../../data/boardData";

// Import all images from the E-Board directory
const images = import.meta.glob('../../assets/images/E-Board/*.jpeg', { eager: true });

const getMemberImage = (name) => {
  // Convert "First Last" to "First_Last.jpeg"
  const filename = name.replace(/ /g, "_") + ".jpeg";
  // Construct the key that matches the glob pattern
  const key = `../../assets/images/E-Board/${filename}`;
  
  // Return the default export (the image URL) if found, otherwise a placeholder
  return images[key]?.default || "https://picsum.photos/400/400";
};

export default function BoardRoster() {
  return (
    <div className="min-h-screen py-10 bg-base-100">
      <div className="container px-6 mx-auto">

        {boardData.map((committee, index) => (
          <div key={index} className="mb-20">
            <motion.h2 
              className="pb-4 mb-8 text-3xl font-bold text-center border-b-2 border-base-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {committee.committee}
            </motion.h2>
            
            <div className="flex flex-wrap justify-center gap-8">
              {committee.members.map((member, mIndex) => (
                <motion.div
                  key={mIndex}
                  className="shadow-xl transition-shadow duration-300 w-80 card bg-base-200 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: mIndex * 0.1 }}
                >
                  <figure className="px-4 pt-4">
                    <img
                      src={getMemberImage(member.name)}
                      alt={member.name}
                      className="object-cover w-full h-64 rounded-xl"
                    />
                  </figure>
                  <div className="items-center text-center card-body">
                    <h3 className="card-title">{member.name}</h3>
                    <p className="shadow-sm badge badge-primary badge-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
