export const keyExpected = (index: number, key: string) => `${key}-${index.toString()}`;

export const randomEnumValue = <T extends object>(anEnum: T): T[keyof T] => {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
};
