import { useState } from "react";
import { createRecord } from "../lib/airtable.js";
import { FileUploader } from "./FileUploader";

const projectTypes = ["Consultancy", "Design", "Front-end", "Back-end"];

const HireUs = () => {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [, setSelectedFile] = useState(null);

  const toggleProjectType = (projectType) => {
    if (selectedProjectTypes.includes(projectType)) {
      setSelectedProjectTypes(
        selectedProjectTypes.filter((type) => type !== projectType)
      );
      return;
    }
    setSelectedProjectTypes([...selectedProjectTypes, projectType]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append("projectTypes", selectedProjectTypes);
    // formData.append("file", selectedFile);

    // convert form data to object
    const fields = {}
    formData.forEach((value, key) => {
      fields[key] = value;
    });
    
    // send form data to Airtable
    const result = await createRecord(fields)
    console.log("result", result)
  };

  return (
    <section className="w-full bg-light-gray dark:bg-black">
      <div className="flex flex-col gap-12 py-28 px-16 md:flex-row md:px-28">
        <div className="flex w-full flex-col gap-4">
          <h2 className="max-w-fit border-b-2 border-pink pb-4 text-5xl uppercase">
            Hire us
          </h2>
          <p className="max-w-prose text-xl">
            Whether you need us to integrate with your team or partner with you to offer the best solution for your product
            needs, we can help. We&apos;re not just a team of experts, we&apos;re your team!
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="mt-12 flex flex-col gap-10"
          >
            <div>
              <label htmlFor="name" className="label-required uppercase">
                Contact Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="email" className="label-required uppercase">
                Contact Email
              </label>
              <input
                name="email"
                type="text"
                required
                placeholder="Your email address"
                className="input"
              />
            </div>

            <div>
              <label htmlFor="company" className="label-required uppercase">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                required
                placeholder="The name of your company or brand"
                className="input"
              />
            </div>
            {/* PROJECT TYPE */}
            <div>
              <h3 className="label-required uppercase">Project Type</h3>
              <small className="my-4 block text-light-gray">
                Please select all that apply
              </small>
              <div className="flex flex-wrap gap-4">
                {projectTypes.map((type) => (
                  <div key={type} onClick={() => toggleProjectType(type)}>
                    <input
                      type="checkbox"
                      name={type}
                      checked={selectedProjectTypes.includes(type)}
                      onChange={() => {}}
                      value={type}
                      className="peer hidden"
                    />
                    <label
                      htmlFor={type}
                      className="shadow-inset inline-flex items-center rounded-full bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 peer-checked:border-none peer-checked:bg-pink peer-checked:text-white peer-checked:shadow-none"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="overview" className="label-required uppercase">
                Project Overview
              </label>
              <input
                type="text"
                name="overview"
                required
                placeholder="A brief overview of your project"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="label-required uppercase">
                Timeline
              </label>
              <input
                type="text"
                name="timeline"
                required
                placeholder="Is there a deadline for your project?"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="budget" className="label-required uppercase">
                Budget
              </label>
              <input
                type="text"
                name="budget"
                required
                placeholder="Is there a budget for your project?"
                className="input"
              />
            </div>
            <FileUploader
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
            <button type="submit" className="btn ml-0 w-fit">
              Submit
            </button>
          </form>
        </div>
        <div id="join-us" className="flex w-full flex-col gap-4 md:w-96">
          <h2 className="max-w-fit border-b-2 border-pink pb-4 text-5xl uppercase">
            Join us
          </h2>
          <p className="w-full">
            Join Developer DAO and help us build the future of work. We&apos;re always looking for experienced developers, designers, and product experts.
          </p>
          <a
            href="http://discord.gg/devdao"
            target="_blank"
            className="btn ml-0 w-fit"
            rel="noreferrer"
          >
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireUs;
