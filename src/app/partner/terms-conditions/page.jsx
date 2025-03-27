import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <div className="w-full bg-primary text-white p-4 text-lg ">
        <h1 className="container text-[24px] mx-auto">Terms and Conditions</h1>
      </div>
      <div className="container mx-auto bg-white p-6 rounded-lg my-8">
        <div className="p-4">
          <p className="">Customer terms of service</p>
          <p>Updated October 31, 2023</p>
          <h2 className="text-lg  mt-4">Summary of these Terms</h2>
          <p>
            Along with the Terms on this page, there are two other documents
            that form part of our contract with you:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <span className="underline">Our How We Work</span> page helps you
              to use our Platform and understand our reviews, our rankings, our
              recommendations, how we make money, and more.
            </li>
            <li>
              <span className="underline">
                Our Content Standards and Guidelines
              </span>{" "}
              help us to keep everything on our Platform relevant to and
              appropriate for our global audience.
            </li>
          </ul>
          <p className="mt-4">
            By agreeing to our Terms, you’re agreeing to everything in all these
            documents. If you don’t accept any of these Terms, please do not use
            our Platform.
          </p>
          <p className="mt-4">
            If something goes wrong with your Travel Experience,
            <a href="#" className="underline">
              Section A15 of these Terms
            </a>
            explains what you can do.
          </p>
          <p className="mt-4">
            If you want to appeal a moderation decision, or report any content
            on our Platform, our
            <a href="#" className="underline">
              Content Standards and Guidelines
            </a>
            explain how to do so.
          </p>
          <p className="mt-4">
            This summary isn’t part of our Terms, or a legal document. It’s just
            a simple explanation.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
