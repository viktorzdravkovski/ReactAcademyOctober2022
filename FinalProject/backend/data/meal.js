// const { NotFoundError } = require("../util/errors");
import { v4 } from "uuid";
import { readData, writeData } from "./util.js";

export const getAll = async () => {
  const storedData = await readData();
  // if (!storedData.meals) {
  //   throw new NotFoundError("Could not find any events.");
  // }
  return storedData.meals;
};

// async function get(id) {
//   const storedData = await readData();
//   if (!storedData.events || storedData.events.length === 0) {
//     throw new NotFoundError("Could not find any events.");
//   }
//
//   const event = storedData.events.find((ev) => ev.id === id);
//   if (!event) {
//     throw new NotFoundError("Could not find event for id " + id);
//   }
//
//   return event;
// }
//
// async function add(data) {
//   const storedData = await readData();
//   storedData.events.unshift({ ...data, id: generateId() });
//   await writeData(storedData);
// }
//
// async function replace(id, data) {
//   const storedData = await readData();
//   if (!storedData.events || storedData.events.length === 0) {
//     throw new NotFoundError("Could not find any events.");
//   }
//
//   const index = storedData.events.findIndex((ev) => ev.id === id);
//   if (index < 0) {
//     throw new NotFoundError("Could not find event for id " + id);
//   }
//
//   storedData.events[index] = { ...data, id };
//
//   await writeData(storedData);
// }
//
// async function remove(id) {
//   const storedData = await readData();
//   const updatedData = storedData.events.filter((ev) => ev.id !== id);
//   await writeData({ ...storedData, events: updatedData });
// }
//
// exports.getAll = getAll;
// exports.get = get;
// exports.add = add;
// exports.replace = replace;
// exports.remove = remove;
