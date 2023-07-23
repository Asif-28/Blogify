import React from "react";

const AboutComp = () => {
  return (
    <div>
      <div className="wrapper pt-3 sm:pt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center py-3">
          About Us
        </h2>
        <div className="text max-w-[900px] px-3 mx-auto text-center text-[14px] sm:text-[18px] font-light py-2 sm:py-3 pb-4 sm:pb-8 font-mono">
          <p>
            Welcome to Blogify, a platform dedicated to empowering writers and
            content creators to express their ideas and connect with a
            like-minded community. Our mission is to inspire creativity and
            provide a seamless experience for crafting unique blogs and
            articles. Blogify welcomes all passionate writers, whether you are a
            seasoned pro or just starting. Our inclusive community embraces
            diverse perspectives and interests, creating a rich tapestry of
            ideas.
          </p>
          <p className="pt-4 text-[#009191] font-mono">
            Join us today and embark on this adventure of creativity and growth.
            Use it now and become part of our community of passionate writers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
