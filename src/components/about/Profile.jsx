import React from "react";

const Profile = () => {
  return (
    <>
      <div className="row">
        <div className="imgProfileCont col-12 col-md-6">
          <img
            src="https://res.cloudinary.com/dhvgi2cmq/image/upload/v1700865769/tiliportoflio/tili_1_y5xniu.png"
            alt="profile pic Lucila"
            className="profilePic"
          />
        </div>
        <div className="col-12 col-md-6 m-auto">
          <div className="">
            <p>
              In +10 years, my journey as a designer has evolved, and today my
              work reflects not only a passion for design but also a strategic
              approach to ensure that the user experience aligns seamlessly with
              my clients' business objectives.{" "}
            </p>
            <p>
              My natural inclination for collaboration, strong problem-solving
              skills, and a keen eye for detail are some of my core strengths.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
