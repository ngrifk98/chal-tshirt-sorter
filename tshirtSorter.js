/* Write a js function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

>>> tshirtSorter('lms')
// sml

>>> tshirtSorter('smllms')
// ssmmll
*/

// Write your solution below:

function tshirtSorter(sizes) {
    let s = 0;
    let m = 0;
    let l = 0;
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i] === "s") {
        s++;
      } else if (sizes[i] === "m") {
        m++;
      } else if (sizes[i] === "l") {
        l++;
      }
    }
    return "s".repeat(s) + "m".repeat(m) + "l".repeat(l);
  }
  
  console.log(tshirtSorter("lms"));
  // logs "sml"
  console.log(tshirtSorter("smllms"));
// ssmmll