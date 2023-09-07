/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
export function search_needle(haystack, needle) {
  const haystack_length = haystack.length;
  const needle_length = needle.length;
  if (needle_length === 0 || needle_length > haystack_length) {
    return -1;
  }
  let haystack_tracker = 0;
  let needle_tracker = 0;
  while (haystack_tracker < haystack_length) {
    if (haystack[haystack_tracker] === needle[needle_tracker]) {
      needle_tracker++;
    } else {
      haystack_tracker = haystack_tracker - needle_tracker;
      needle_tracker = 0;
    }
    haystack_tracker++;
    if (needle_tracker === needle_length) {
      return haystack_tracker - needle_tracker;
    }
  }
  return -1;
}
