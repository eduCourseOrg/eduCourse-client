import PropTypes from "prop-types";
const FieldSet = ({ label, children }) => {
  return (
    <fieldset className="flex  gap-y-20 border border-teal-700 p-4">
      {label && (
        <legend className="text-lg font-bold text-primary">{label}</legend>
      )}
      <div className="w-4/5 ">{children}</div>
    </fieldset>
  );
};
FieldSet.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FieldSet;
