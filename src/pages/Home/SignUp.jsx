import { useState } from "react";

function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-base-200 p-8">
        <div>
        <h1 className="sm:text-6xl text-5xl font-bold mb-6">Stay in Touch!</h1>
        </div>
      <form action="https://socalmist.us7.list-manage.com/subscribe/post" method="POST" onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box sm:w-md w-xs border p-4 shadow-lg">
            <legend className="fieldset-legend">Sign Up!</legend>

            <input type="hidden" name="u" value="caa364fcfc19ab4188741b68e" />
            <input type="hidden" name="id" value="e85822fca8" />

            <label className="label">First Name</label>
            <input type="text" className="input w-full" placeholder="Meraal" name="MERGE1" id="MERGE1" />
            <label className="label">Last Name</label>
            <input type="text" className="input w-full" placeholder="Abutaha" name="MERGE2" id="MERGE2" />
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="socalmist@gmail.com" name="MERGE0" id="MERGE0" />

            {/* submit */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className={`btn btn-md w-full ${submitted ? "btn-disabled" : "btn-primary"}`}
              >
                {submitted ? "Thank You!" : "Sign Up"}
              </button>
            </div>
          </fieldset>
      </form>
    </div>
  );
}

export default SignUp;
