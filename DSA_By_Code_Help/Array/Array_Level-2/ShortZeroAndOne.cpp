#include<iostream>

using namespace std;

void shorted( int arr[] , int n ){

    int CountZero = 0 ;
    int CountOne = 0 ; 

    for ( int i  = 0; i < n ;  i ++ ) {
        if ( arr[i] == 0 ){
            CountZero++;
        }
        if( arr[i] == 1){
            CountOne++; 
       }
    }

   int i ;

   for( i = 0 ;  i < CountZero ; i++){
        arr[i] = 0 ; 

   }    

   for ( int j = i ; j < n ; j++){
         arr[j] = 1 ; 
   }

}

int main() {
    int arr[] = { 0,0, 0 , 0, 0 ,0 ,0 ,1,0 ,1 ,1,0, 1,0, 1, 1 , 1 , 1 , 1};

    int n = 19 ;

    shorted(arr , n );
    
    for( int i = 0 ; i < n ; i++){
        cout << arr[i] <<" ";
    }

    
}