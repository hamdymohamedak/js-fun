function removeDuplicates(input) {
  if (Array.isArray(input)) {
    return [...new Set(input)];
  } else if (typeof input === "object" && input !== null) {
    const seen = new Set();
    const result = {};

    for (const key in input) {
      const value = input[key];
      const serialized = JSON.stringify(value);

      if (!seen.has(serialized)) {
        seen.add(serialized);
        result[key] = value;
      }
    }

    return result;
  } else {
    throw new TypeError("Input must be an array or object.");
  }
}
export default removeDuplicates
