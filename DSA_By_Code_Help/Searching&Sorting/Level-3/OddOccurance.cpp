#include<iostream>

using namespace std ;


int findOddOccuringElement( int arr[] , int n ) {

    int s = 0;
    int e = n - 1;

    int mid  = s + (e - s ) / 2;

    while ( s <= e) {
        if( s==e) {
            return s;
        }
        // even
        if ( mid % 2 == 0) {
            if( arr[mid] == arr[mid+1]){
                s = mid + 2;
            }
            else{
                e = mid;
            }
        }
        if( mid % 2 != 0){
             if( arr[mid] == arr[mid-1] ) {
                s = mid + 1;
              }
              else {
                e = mid - 1;
              }
        }
            
            mid = s + ( e -s) /2 ;

            

            
       
    }
    return -1 ;

}



int main () {

    int arr[] { 10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 60, 70, 70, };
    int n  = 13;

    int ansIndex = findOddOccuringElement(arr, n);

    cout << "Final Ans is :" <<arr[ansIndex] << endl;
}