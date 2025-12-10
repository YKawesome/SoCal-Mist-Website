import { useState } from "react";
import { motion } from "framer-motion";

function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">

          {/* Form Section */}
          <motion.div 
            className="lg:w-1/2 w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h3 className="card-title justify-center text-2xl mb-4">Sign Up</h3>
                
                <form 
                  action="https://socalmist.us7.list-manage.com/subscribe/post" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  target="_blank"
                >
                  <input type="hidden" name="u" value="caa364fcfc19ab4188741b68e" />
                  <input type="hidden" name="id" value="e85822fca8" />

                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Meraal" 
                      name="MERGE1" 
                      id="MERGE1" 
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>

                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Abutaha" 
                      name="MERGE2" 
                      id="MERGE2" 
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>

                  <div className="form-control w-full mb-6">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="socalmist@gmail.com" 
                      name="MERGE0" 
                      id="MERGE0" 
                      required
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>

                  <div className="form-control mt-2">
                    <button
                      type="submit"
                      className={`btn btn-primary w-full ${submitted ? "btn-disabled" : ""}`}
                    >
                      {submitted ? "Thank You!" : "Sign Up"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-neutral">Stay in Touch!</h2>
            <p className="text-lg text-base-content/80 mb-8">
              Subscribe to our newsletter to get the latest updates on registration, 
              competitions, and events. Don't miss out on the excitement!
            </p>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
}

export default SignUp;