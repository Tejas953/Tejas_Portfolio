import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] p-6 bg-gradient-to-r from-teal-500 to-teal-300 rounded-lg shadow-lg">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center tracking-wide">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-teal-600">Winner</p>
          <p className="font-bold text-4xl text-lightBrown">SIH</p>
        </div>
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-teal-600">Rank</p>
          <p className="font-bold text-4xl text-lightBrown">AIR 1</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-700">
        Winner of Smart India Hackathon 2024 for delivering an innovative solution to a Railway Ministry problem statement.
      </p>

      <div className="flex flex-col items-center justify-center gap-2 bg-teal-50 p-2 rounded-lg shadow-sm">
        <ExperienceInfo number="" text=" ₹ 1 Lakh Cash Prize" />
      </div>


    </div>
  );
};

export default ExperienceTopLeft;
