#include<iostream>
#include<limits.h>

using namespace std ;



int shani( int arr[] , int n , int target ) {

    int s = 0 ;

    int e = n-1 ;

    int mid = s + (e - s) / 2 ;

    int ans = -1 ;

    while ( s < e )  {
        if ( arr[mid] == target ) {
            ans = mid ;

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


int main(){

    int arr[] = { 1 , 3, 4 , 5, 6 , 7 , 8 , 9} ;

    int n  = 8 ; 
    int target = 8 ;

  int anss = shani( arr , n , target ) ;

    if ( anss == -1 ) {
        cout << "Element not found" << endl;
    }

    else {
        cout << "Element found at index : "  << anss << endl ;
    }
    
}