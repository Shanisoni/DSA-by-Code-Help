#include<iostream>

using namespace std ;



int shani( int arr[] , int N) {

    int s = 0 ;

    int e = N - 1 ;

    int ans  = 0 ; 
    
    int mid = s + ( e- s) /2 ;
  
    while( s <= e) {

        int diff = arr[mid] - mid ;

        if ( diff == 1) {
            s = mid + 1 ;

        }

        else{
            e = mid - 1 ; 

            // Agr hum yha mid use krenge as  a index toh hume mid + 1 krna hoga kyuki hume missing element chahiye jo mid se ek chhota hoga

            //  Aour agr hum arr[mid ] ko store  krte h to hume mid - 1 krna hoga kyuki hume missing element chahiye jo mid se ek bda hoga
            ans = mid ; 

        }

        mid = s + ( e - s ) / 2 ;


    }
    return ans + 1 ;
}



int main( ) {


    int arr[] = { 1 , 2 , 3 , 4 , 5 ,6 , 7 , 8 , 9 , 10  , 12 }  ;

    int N = 12 ;

    cout << " Missing Element is :" << shani( arr , N) << endl ;
}