import fs from "fs/promises";

export const readData = async () => {
  const data = await fs.readFile("meals.json", "utf8");
  return JSON.parse(data);
};

export const writeData = async (data) => {
  await fs.writeFile("meals.json", JSON.stringify(data));
};
