import { evaluateExpression } from "./evaluator";

type Variables = Record<string, number>;

export class FormulaEngine {
  private variables: Variables;

  constructor(variables: Variables) {
    this.variables = variables;
  }

  evaluate(formula: string) {
    return evaluateExpression(formula, this.variables);
  }
}
