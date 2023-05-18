interface MyProps {
  className?: string;
  obj: {} | string | number | readonly string[] | undefined;
  [otherProps: string]: unknown;
}

function MyDebuggerObj({ obj, ...otherProps }: MyProps) {
  return (
    <div className="className" {...otherProps}>
      <pre className="pre--box">
        <code>{JSON.stringify(obj, undefined, 2)}</code>
      </pre>{" "}
    </div>
  );
}

export default MyDebuggerObj;
