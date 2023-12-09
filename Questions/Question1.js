function firstNonRepeatingChar() {
  const charCount = {};
  const input = "aabccddEE";

  // Count occurrences of alphabetic characters
  for (const char of input) {
    if (/[a-zA-Z]/.test(char)) {
      const lowercaseChar = char.toLowerCase();
      charCount[lowercaseChar] = (charCount[lowercaseChar] || 0) + 1;
    }
  }

  // Find the first non-repeating character
  for (const char of input) {
    if (/[a-zA-Z]/.test(char)) {
      const lowercaseChar = char.toLowerCase();
      if (charCount[lowercaseChar] === 1) {
        return char; // Return the first non-repeating character
      }
    }
  }

  return null; // If there's no non-repeating character found
}

// Example usage:
const result = firstNonRepeatingChar();
if (result !== null) {
  console.log(`First non-repeating character: ${result}`);
} else {
  console.log('No non-repeating character found.');
}
