#include <iostream>

#include <limits.h>

using namespace std;

int main() {

    int arr1[] = { 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8} ;

    int size = sizeof(arr1) / sizeof(arr1[0]);

//     int arr2[size] ;


//    cout<<size << endl ;

    for( int i = 0; int j = size - 1; i <= j; i-- ; j++ ) {
        // cout << arr1[i] << " ";

         arr2[j] = arr1[i];

        
    }
    cout<< endl;


    return 0 ;
 
    
}
