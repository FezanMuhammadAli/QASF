import PropTypes from "prop-types";

function Project({ title, description, link }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href={link} className="text-qasfgreen font-medium hover:underline">
        Enroll Now →
      </a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
