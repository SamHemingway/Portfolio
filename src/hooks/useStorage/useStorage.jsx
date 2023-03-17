import React from "react";

/**
 * Hook for using either local or session storage.
 * @param {(string|string[])} data - The data being passed to the hook.
 * - `get/delete` methods require a string.
 * - `set` method requires an array of 2 values: `[key, value]`.
 * - Ignored if the options object defines the method as `clear`.
 * @param {Object} [options = {method, type}] - An object with options.
 * @param {string} [options.method='get'] - The storage method to be used (get, set, delete or clear).
 * @param {string} [options.type='window'] - Define whether using window or session storage.
 *
 */

function useStorage(data, options = { method: "get", type: "local" }) {
  const methods = ["get", "set", "remove", "clear"];
  let methodToUse;
  let result;
  const storageType =
    options.type === "session" ? sessionStorage : localStorage;

  if (!methods.includes(options.method)) {
    console.error(
      `You specified an incorrect storage method (${options.method}. Use either 'get', 'set', 'remove' or 'clear'.)`
    );
    return null;
  }

  if (!data && options.method !== `clear`) {
    console.error(
      `The useStorage method requires data as the first prop. This prop accepts a string if using the get/delete methods, or an array: [key, value] for set.`
    );
    return null;
  }

  if (options.method === "set" && !Array.isArray(data)) {
    console.error(`The set method requires an array of data ([key, value]).`);
    return null;
  }

  if (Array.isArray(data) || options.method === "set") methodToUse = "set";

  if (options.method === "clear") methodToUse = "clear";

  if (options.method === "remove") methodToUse = "remove";

  if (options.method === "get") methodToUse = "get";

  if (methodToUse === "get") {
    React.useEffect(() => {
      result = storageType.getItem(data);
    }, []);
  }

  if (methodToUse === "set") {
    const [key, value] = data;
    React.useEffect(() => {
      storageType.setItem(key, value);
      console.log(`${key}: ${value} added to ${storageType}Storage`);
    }, []);
  }

  if (methodToUse === "remove") {
    React.useEffect(() => {
      storageType.removeItem(data);
      result = `${key}: ${value} removed from ${storageType}Storage`;
    }, []);
  }

  if (methodToUse === "clear") {
    React.useEffect(() => {
      storageType.clear();
      result = `${storageType}Storage cleared`;
    }, []);
  }

  if (typeof result === "string") {
    console.log(string);
    return;
  }

  return result;
}
export default useStorage;
