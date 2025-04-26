/**
 * Unique Fetcher: removes duplicate objects from a JSON array
 * @param {Array} data - Array of objects you want to clean
 * @returns {Array} - New array without duplicates
 */
function dedupeFetch(data) {
    if (!Array.isArray(data)) {
      throw new Error("Input must be an array of objects.");
    }
  
    const seen = new Set();
    const result = [];
  
    for (const item of data) {
      const serialized = JSON.stringify(item);
      if (!seen.has(serialized)) {
        seen.add(serialized);
        result.push(item);
      }
    }
  
    return result;
  }
  export default dedupeFetch