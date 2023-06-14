import { useState } from "react";

var course = [
  {
    name: "Angular",
    educator: "Khalid"
  },
  {
    name: "ReactJS",
    educator: "Roopashri"
  },
  {
    name: "Ajax",
    educator: "Krishna"
  }
];
const Educator = () => {
  const [crsData, setCrsData] = useState(course);
  return (
    <>
                              <h4>UI Courses list</h4>                       {" "}
      <div>
        {" "}
        {crsData.map((course) => {
          return (
            <div>
                                                     <b>Course: </b>
              {course.name}
              <br />                                       <b>
                Educator:{" "}
              </b>{" "}
              {course.educator} <br />
              <br />                                 {" "}
            </div>
          );
        })}
                               {" "}
      </div>
                           {" "}
    </>
  );
};
export default Educator;
