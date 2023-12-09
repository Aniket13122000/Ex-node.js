function printSpiralMatrix(N) {
    let val = N * N;
    let matrix = new Array(N).fill().map(() => new Array(N).fill(0));
    
    let top = 0, bottom = N - 1, left = 0, right = N - 1;
  
    while (top <= bottom && left <= right) {
      // Fill bottom row from right to left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = val--;
      }
      bottom--;
  
      // Fill left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = val--;
      }
      left++;
  
      // Fill top row from left to right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = val--;
      }
      top++;
  
      // Fill right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = val--;
      }
      right--;
    }
  
    // Print the resulting matrix
    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
  
  // Example usage:
  const N = 6;
  printSpiralMatrix(N);
  