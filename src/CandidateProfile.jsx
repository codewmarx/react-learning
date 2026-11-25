export const CandidateProfile = () => {
  const candidateName = "Marko Garado";
  const candidateRole = "Software Developer";
  const yearsOfExperience = 4;
  const yearStarted = 2026;
  const isAvailable = true;

  return (
    //embed javascript expressions using curly braces directly in html markup
    <>
      <h1>{candidateName}</h1>
      <p>
        {candidateRole} with {yearsOfExperience} years of experience.
      </p>
      <br />
      <p>Started in {yearStarted - yearsOfExperience}</p>
      <p>Status: {isAvailable ? "Open to work" : "Not available"}</p>
      <p>
        Contact:{" "}
        {candidateName.toLowerCase().replace(" ", ".").concat("@gmail.com")}
      </p>
      <br />
    </>
  );
};
