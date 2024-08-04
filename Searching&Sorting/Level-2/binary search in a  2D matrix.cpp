// class Solution {
// public:
//     bool searchMatrix(vector<vector<int>>& matrix, int target) {
//         int row = matrix.size();
//         int col = matrix[0].size();
//         int n = row*col;

//         int s = 0;
//         int e = n-1;
//         int mid = s + (e-s)/2;

//         while(s <= e) {
//             int rowIndex = mid/col;
//             int colIndex = mid % col;
//             int currNumber = matrix[rowIndex][colIndex];

//             if(currNumber == target)
//                 return true;
//             else if(target > currNumber ) {
//                 //right;
//                 s = mid + 1;
//             } 
//             else {
//                 //left;
//                 e = mid-1;
//             }
//             mid = s + (e-s)/2;
//         }
//         return false;
//     }
// };