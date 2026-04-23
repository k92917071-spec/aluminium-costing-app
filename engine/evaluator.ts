export function evaluateExpression(
  expression: string,
  variables: Record<string, number>
): number {
  let exp = expression;

  // Replace variables
  Object.keys(variables).forEach((key) => {
    exp = exp.replace(new RegExp(`\\b${key}\\b`, "g"), String(variables[key]));
  });

  // IF condition support
  exp = exp.replace(
    /IF\((.*?),(.*?),(.*?)\)/g,
    (_, condition, trueVal, falseVal) => {
      return eval(condition) ? trueVal : falseVal;
    }
  );

  try {
    return Function(`"use strict"; return (${exp})`)();
  } catch (err) {
    console.error("Formula Error:", err);
    return 0;
  }
}
