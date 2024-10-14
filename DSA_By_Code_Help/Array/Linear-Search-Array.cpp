#include<iostream> 
#include<limits.h>
 
 using namespace std ;

 int minimum( int arr[] , int size) {
    
    int minAns = INT_MAX;

    for(int i = 0 ;  i < size ; i++) {
        if( arr[i] < minAns) {
            minAns = arr[i] ;       

        }
    }

    return minAns;
 }

 int main() {

    int arr[8] = {1 , 3 , 4 , 6 , 7 , 8, 9 , 0} ;

    int size = 8;




   int anas =  minimum(arr , size);

   cout<< anas <<endl;

 }

 