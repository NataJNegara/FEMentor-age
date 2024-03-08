export default function FormRow({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={children.props.id}
          className={`label ${error ? "text-light-red" : ""}`}>
          {label}
        </label>
      )}
      {children}
      {error ? (
        <span className="py-1 text-xs text-light-red">{error}</span>
      ) : null}
    </div>
  );
}
