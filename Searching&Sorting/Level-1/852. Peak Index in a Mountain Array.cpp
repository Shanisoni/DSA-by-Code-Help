//  My answer


// class Solution {
// public:
//     int peakIndexInMountainArray(vector<int>& arr) {
//         int N = arr.size();

//         int s = 0 ;

//         int e = arr.size() - 1 ;

//         int mid = s + ( e - s) / 2;

//         // int ans = 0; 

//         while ( s < e) {

//             if ( arr[mid] > arr[mid + 1]) {
//                 e = mid ;
//             }

//             else{
//                  s = mid + 1 ;
//             }

//             mid = s + ( e - s)/2 ;




//         }
//          return s ;














        // second solution 




        

//         class Solution {
// public:
//     int peakIndexInMountainArray(vector<int>& arr) {
//         int N = arr.size();

//         int s = 0 ;

//         int e = arr.size() - 1 ;

//         int mid = s + ( e - s) / 2;

//         // int ans = 0; 

//         while ( s < e) {

            
//             if ( arr[mid] > arr[mid + 1 ]  && arr[mid] > arr[mid - 1]){
//                 return mid ;
//             }
//             else if( arr[mid] > arr[mid + 1]){

//                 e = mid -1  ;

//             }
//             else {

//                 s = mid + 1;
//             }

//             mid = s + ( e - s)/2 ;
//         }
//         return mid;


        
//     }
// };