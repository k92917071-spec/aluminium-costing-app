import { FormulaEngine } from "@/engine/formulaEngine";

export function useCalculation() {
  const calculate = (size, variables, formula) => {
    const engine = new FormulaEngine({
      weight_per_km: size.weight_per_km,
      ...variables
    });

    return engine.evaluate(formula);
  };

  return { calculate };
}
