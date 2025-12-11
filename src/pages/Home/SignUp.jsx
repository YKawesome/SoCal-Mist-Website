import { useState } from "react";
import { motion } from "framer-motion";

function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-primary">
      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-12">

          {/* Form Section */}
          <motion.div 
            className="w-full max-w-md lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="shadow-2xl card bg-base-100">
              <div className="card-body">
                <h3 className="justify-center mb-4 text-2xl card-title">Sign Up</h3>
                
                <form 
                  action="https://socalmist.us7.list-manage.com/subscribe/post" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  target="_blank"
                >
                  <input type="hidden" name="u" value="caa364fcfc19ab4188741b68e" />
                  <input type="hidden" name="id" value="e85822fca8" />

                  <div className="w-full mb-4 form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Meraal" 
                      name="MERGE1" 
                      id="MERGE1" 
                      className="w-full input input-bordered focus:input-primary" 
                    />
                  </div>

                  <div className="w-full mb-4 form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Abutaha" 
                      name="MERGE2" 
                      id="MERGE2" 
                      className="w-full input input-bordered focus:input-primary" 
                    />
                  </div>

                  <div className="w-full mb-6 form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="socalmist@gmail.com" 
                      name="MERGE0" 
                      id="MERGE0" 
                      required
                      className="w-full input input-bordered focus:input-primary" 
                    />
                  </div>

                  <div className="mt-2 form-control">
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
            className="text-center lg:w-1/2 lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-5xl font-bold text-neutral">Stay in Touch!</h2>
            <p className="mb-8 text-lg text-base-content/80">
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