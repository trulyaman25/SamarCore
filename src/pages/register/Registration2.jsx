import React, { useEffect, useState } from "react";
import CollegeForm from "./CollegeForm";
import OptionForm from "./OptionForm";
import InputForm from "./InputForm";
import TeamLeaderForm from "./TeamLeaderForm";
import Rules from "./Rules";
import MemberForm from "./MemberForm";
import { useParams } from "react-router-dom";
import HomeBackground from "../../components/homeBackground";
import { SPORTS } from "./Constants";
import UnderConstruction from "../underConstruction"

const Registration2 = () => {
  const { sport: sport_name } = useParams();
  const [sport, setSport] = useState(null);
  const [college, setCollege] = useState("");
  const [category, setCategory] = useState("");
  const [teamName, setTeamName] = useState("");
  const [leaderDetails, setLeaderDetails] = useState({});
  const [memberDetails, setMemberDetails] = useState([]);
  const [step, setStep] = useState(1);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwxrQMHKa2hYdXgZrJ-EfKY7_sEDGNdt--aEB175uQHFNr7kLA1LxINyWAXP9ACwBqu/exec";

  useEffect(() => {
    const s = SPORTS.find((sport) => sport.name === sport_name) || null;
    console.log(s);
    setSport(s);
  }, []);

  useEffect(() => {
    if (!college) setStep(1);
    else if (!category) setStep(2);
    else if (!teamName) setStep(3);
    else if (
      !leaderDetails.name ||
      !leaderDetails.year ||
      !leaderDetails.phone ||
      !leaderDetails.email
    )
      setStep(4);
    else setStep(5);
  }, [sport, college, category, teamName, leaderDetails, step]);

  const handleSubmit = async () => {
    const payload = {
      sport: sport.name,
      college,
      category,
      teamName,
      leaderName: leaderDetails.name,
      leaderEmail: leaderDetails.email,
      leaderPhone: leaderDetails.phone,
      leaderYear: leaderDetails.year,
    };

    memberDetails.forEach((v, i) => {
      payload[`member_${i + 2}_name`] = v.name;
      payload[`member_${i + 2}_year`] = v.year;
    });
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload).toString(),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        const errorText = await response.text();
        alert("Form submission failed: " + errorText);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <>
      {!sport ? (
        <UnderConstruction />
      ) : (
        <>
          <HomeBackground />
          <div className="flex align-middle justify-center w-full">
            <div className="w-4/5 flex justify-start items-start border backdrop-blur-[5px] border-gray-200 mt-[160px] mb-[80px] z-10 rounded-2xl">
              <div className="min-w-96">
                <Rules sport={sport} />
              </div>
              <div className="overflow-y-auto flex-grow px-8 py-6 border-l">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <CollegeForm value={college} setValue={setCollege} />
                  <OptionForm
                    index="2"
                    ques={"Select Category"}
                    value={category}
                    setValue={setCategory}
                    options={["Male", "Female"]}
                    enabled={step >= 2}
                  />
                  {college !== "NIT Raipur" && (
                    <InputForm
                      value={teamName}
                      setValue={setTeamName}
                      ques={"Team Name?"}
                      enabled={step >= 3}
                    />
                  )}
                  {college === "NIT Raipur" && (
                    <OptionForm
                      index="4"
                      ques={"Select Group"}
                      value={teamName}
                      setValue={setTeamName}
                      options={["IT + Mech", "CSE + META"]}
                      enabled={step >= 3}
                    />
                  )}
                  <TeamLeaderForm
                    leaderDetails={leaderDetails}
                    setLeaderDetails={setLeaderDetails}
                    enabled={step >= 4}
                  />
                  <MemberForm
                    value={memberDetails}
                    setValue={setMemberDetails}
                    count={sport.players - 1}
                    enabled={step >= 5}
                  />
                  <div className="flex gap-3 mt-2">
                    <button
                      className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Registration2;
