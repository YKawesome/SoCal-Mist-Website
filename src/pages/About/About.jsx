import PageHeader from "../../components/PageHeader/PageHeader";
import images from "../../utils/preloadimages";
import AboutRow from "./AboutRow";
import AboutRows from "./AboutRows";

function About() {

  return (
    <>
      <PageHeader title="About MIST" />
      <div>
        <div>
          <div className="hero bg-base-200 lg:h-[25vh] h-[30vh]">
            <div className=" hero-content text-center">
              <div className="lg:max-w-lg max-w-md">
                <h1 className="text-2xl font-bold">
                  Muslim Inter-Scholastic Tournament
                </h1>
                <p className="py-6">
                  Our mission is to bring high school students together to
                  develop leadership, promote communication, and inspire
                  creativity while gaining a deeper understanding of Islam and
                  Muslims.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-base-100 h-full py-10">
            {
              AboutRows.map((row, index) => (
                <div>
                  <AboutRow
                    key={index}
                    index={index}
                    title={row.title}
                    content={row.content}
                    image={row.image}
                    imageAlt={row.imageAlt}
                  />
                </div>
              ))
            }
        </div>
      </div>
    </>
  );
}

export default About;
