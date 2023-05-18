interface MyProps {
  className?: string;
  submitted: boolean;
  obj: {} | string | number | readonly string[] | undefined;
  [otherProps: string]: unknown;
}

function MyDebuggerObj({ obj, submitted, ...otherProps }: MyProps) {
  return (
    <div className="className" {...otherProps}>
      <pre className="pre--box">
        <h5>{submitted ? "Submitted!" : ""}</h5>
        <code>{JSON.stringify(obj, undefined, 2)}</code>
      </pre>{" "}
    </div>
  );
}

export default MyDebuggerObj;
