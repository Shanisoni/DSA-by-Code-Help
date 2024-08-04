#include<iostream>
#include<limits.h>

using namespace std ;



int shani( int arr[] , int n , int target ) {

    int s = 0 ;

    int e = n-1 ;

    int mid = s + (e - s) / 2 ;

    int ans = -1 ;

    while ( s <= e )  {
        if ( arr[mid] == target ) {
            ans = mid ;
            // to find the last occurence of the element
            // s = mid + 1 ;

            // to find the first occurence of the element
            e = mid - 1 ;
        }
        else if ( target > arr[mid]) {
            s =  mid + 1 ;

         }
         else if( target < arr[mid] ) {
            e  = mid - 1 ;
         }
         

         mid  = s + ( e - s ) / 2 ; 
    }
    return ans ;
}


int soni( int arr[] , int n , int target ) {

    int s = 0 ;

    int e = n-1 ;

    int mid = s + (e - s) / 2 ;

    int ans = -1 ;

    while ( s <= e )  {
        if ( arr[mid] == target ) {
            ans = mid ;
            // to find the last occurence of the element
            s = mid + 1 ;

            // to find the first occurence of the element
            // e = mid - 1 ;
        }
        else if ( target > arr[mid]) {
            s =  mid + 1 ;

         }
         else if( target < arr[mid] ) {
            e  = mid - 1 ;
         }
         

         mid  = s + ( e - s ) / 2 ; 
    }
    return ans ;
}


int findTotalOccurence( int arr[] , int n , int target ){

    int f = shani( arr , n, target ) ;
    int l = soni( arr , n , target ) ;

    int totalOccurence = l - f + 1
 ;

 return totalOccurence ;
}


int main(){

    int arr[] = { 1 , 1  ,  1 , 1 , 3, 4 , 5, 5, 5, 5, 5, 6 ,  7 , 8 , 9} ;

    int n  = 15 ; 
    int target = 5 ;


    int ss = findTotalOccurence( arr , n , target ) ;

    cout << ss  << endl ;

//   int anss = shani( arr , n , target ) ;

//     if ( anss == -1 ) {
//         cout << "Element not found" << endl;
//     }

//     else {
//         cout << "Element found at index : "  << anss << endl ;
//     }
    
}