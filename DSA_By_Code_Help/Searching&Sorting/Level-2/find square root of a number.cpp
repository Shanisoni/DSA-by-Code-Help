// class Solution {
// public:


//     int mySqrt(int x) {
//         int s = 0;
//         int e = x;
//         long long int mid = s + (e-s)/2;
//         int ans = -1;

//         while(s <= e) {
//             //kya mid hi toh answer nahi
//             if(mid*mid == x) {
//                 return mid;
//             }
//             else if(mid*mid < x) {
//                 //ans store
//                 //right me jao
//                 ans = mid;
//                 s = mid+1;
//             }
//             else {
//                 //left me jana h 
//                 e = mid-1;
//             }
//             mid = s + (e-s)/2;
//         }
//         return ans;
//     }
// };