import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import useInformation from "./useInformation";
import styles from "./InformationForm.module.css";

const InformationForm = () => {
  const { handleSubmit, onSubmit, register, errors } = useInformation();
  const [skills, setSkills] = useState(['']);
  const [domains,setDomains] =useState(['']);
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectDescription, setProjectDescription] = useState(''); 
  const handleFileChange = (file) => {
    setSelectedFile(file);
  };
  
  
  const handleChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };
  const handleAdd = () => {
    setSkills([...skills, '']);
  };
  const handleRemove = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleDomainChange = (index, value) => {
    const newDomains = [...domains];
    newDomains[index] = value;
    setDomains(newDomains);
  };
  const handleAddDomain = () => {
    setDomains([...domains, '']);
  };
  const handleRemoveDomain = (index) => {
    const newDomains = [...domains];
    newDomains.splice(index, 1);
    setDomains(newDomains);
  }

  
  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4>Student Information</h4>
        <Form.Group className="mb-3" controlId="choice">
          <Form.Label>Placement or Higher study</Form.Label>
          <Form.Select
            {...register("choice")}
            isInvalid={!!errors.choice?.message}
          >
            <option value="placement">Placement</option>
            <option value="higher_study">Higher Study</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errors.choice && errors.choice.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="cgpa">
          <Form.Label>CGPA</Form.Label>
          <Form.Control
            placeholder="Enter your CGPA"
            {...register("cgpa")}
            isInvalid={!!errors.cgpa?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cgpa && errors.cgpa.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="personal_email">
          <Form.Label>Personal email</Form.Label>
          <Form.Control
            placeholder="Enter your email address"
            {...register("personal_email")}
            isInvalid={!!errors.personal_email?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.personal_email && errors.personal_email.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            placeholder="Enter your age"
            {...register("age")}
            isInvalid={!!errors.age?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age && errors.age.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone_no">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            placeholder="Enter your phone number"
            {...register("phone_no")}
            isInvalid={!!errors.phone_no?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone_no && errors.phone_no.message}
          </Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="skill">
          <Form.Label>Skills</Form.Label>
          {skills.map((skill, index) => (
            <div key={index} className="d-flex mb-2">
              <Form.Control
                placeholder="Enter your skills"
                value={skill}
                onChange={(e) => handleChange(index, e.target.value)}
                isInvalid={!!errors.skill?.message}
              />
              <Button
                variant="outline-danger"
                onClick={() => handleRemove(index)}
                className="ms-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            variant="outline-secondary"
            onClick={handleAdd}
          >
            Add Skill
          </Button>
          <Form.Control.Feedback type="invalid">
            {errors.skill && errors.skill.message}
          </Form.Control.Feedback>
        </Form.Group> */}
      <Form.Group className="mb-3" controlId="skill">
  <Form.Label>Skills</Form.Label>
  <MultiAdd name="skill" setResumeDetails={onSubmit} placeholder="skill"    />
</Form.Group>

        
        {/* <Form.Group className="mb-3" controlId="domain">
          <Form.Label>Domain/Technology</Form.Label>
          {domains.map((domain, index) => (
            <div key={index} className="d-flex mb-2">
              <Form.Control
                placeholder="Interested domain"
                value={domain}
                onChange={(e) => handleDomainChange(index, e.target.value)}
                isInvalid={!!errors.domain?.message}
              />
              <Button
                variant="outline-danger"
                onClick={() => handleRemoveDomain(index)}
                className="ms-2"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button variant="outline-secondary" onClick={handleAddDomain}>
            Add Domain
          </Button>
          <Form.Control.Feedback type="invalid">
            {errors.domain && errors.domain.message}
          </Form.Control.Feedback>
        </Form.Group> */}
         <Form.Group className="mb-3" controlId="domain">
             <Form.Label>Domain/Technology</Form.Label>
            <MultiAdd name="domain" setResumeDetails={onSubmit} placeholder="entrested domain" />
                 </Form.Group>

        {/* <Form.Group className="mb-3" controlId="language">
          <Form.Label>Language</Form.Label>
          <Form.Control
          placeholder="Enter konwn language"
          {...register("language")}
          isInvalid={!!errors.language?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.language && errors.language.message}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="Hobby">
          <Form.Label>Hobby</Form.Label>
          <Form.Control
          placeholder="Enter your hobbies"
          {...register("hobby")}
          isInvalid={!!errors.hobby?.message}
          />
          <Form.Control.Feedback type="invalid">
          {errors.hobby && errors.hobby.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="event">
          <Form.Label>Event Participation</Form.Label>
          <Form.Control
          placeholder="Event Name"
          {...register("event")}
          isInvalid={!!errors.event?.message}
          />
          <input type="file" accept=".pdf" onChange={(event) => handleFileChange(event.target.files[0])} />
          <Form.Control.Feedback type="invalid">
          {errors.event && errors.event.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="project">
          <Form.Label>Project</Form.Label>
          <Form.Control
            placeholder="Enter your project name"
            {...register("project")}
            isInvalid={!!errors.project?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.project && errors.project.message}
          </Form.Control.Feedback>
        </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="projectDescription">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your project description"
            {...register("projectDescription")}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            isInvalid={!!errors.projectDescription?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.projectDescription && errors.projectDescription.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkedin">
          <Form.Label>Linkedin Link</Form.Label>
          <Form.Control
            placeholder="Enter your linkedin link"
            {...register("linkedin")}
            isInvalid={!!errors.linkedin?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.linkedin && errors.linkedin.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="github">
          <Form.Label>Github link</Form.Label>
          <Form.Control
            placeholder="Enter your github link"
            {...register("github")}
            isInvalid={!!errors.github?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.github && errors.github.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default InformationForm;
