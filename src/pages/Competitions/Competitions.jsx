import PageHeader from '../../components/PageHeader/PageHeader';
import CompetitionsData from './CompetitionsData';
import CompetitionCard from './CompetitionCard/CompetitionCard';

function Competitions() {
  return (
    <div>
      <PageHeader title="Competitions" />

      <div className="bg-base-200 py-10 px-4">
        <div className="w-[90%] mx-auto space-y-12">
          {CompetitionsData.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-4xl font-bold mb-2 text-center">{category.category}</h2>
              <p className="text-center text-lg mb-6">{category.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.competitions.map((comp, i) => (
                  <CompetitionCard key={i} name={comp.name} details={comp.details} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Competitions;