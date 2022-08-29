import classNames from "classnames";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label
        style={{ color: "#bf2b7a", fontFamily: "cursive", fontSize: "20px" }}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...rest}
        id={name}
        className={classNames("form-control", { "is-invalid": error })}
      />
      <span className="invalid-feedback">{error}</span>
    </div>
  );
};

export default Input;
