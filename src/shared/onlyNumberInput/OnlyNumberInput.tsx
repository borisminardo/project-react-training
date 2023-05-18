function OnlyNumberInput(
  value: string | number | readonly string[] | undefined
): string | number | readonly string[] | undefined {
  if (typeof value === "string") {
    if (value === "") return value;
    let controllo = value.match(/[0-9]$/) ? value : value.slice(0, -1);
    return controllo;
  } else {
    return value;
  }
}

export default OnlyNumberInput;
