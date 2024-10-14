#include <iostream>

#include <limits.h>

using namespace std;



void swapfunction(int A[] , int size) {


   

    for( int left = 0, right = size - 1;  left <= right;  left++ ,  right--){

        swap(A[left] , A[right]) ; 

    }


    for(int i = 0; i <size; i++) {
        cout << A[i] << " ";
    }

      
}


int main() {

int A[10] = {2, 4, 5, 6, 7, 8, 9, 10, 11, 12};

int size = 10;
// cout << "size = " << size << endl;

  swapfunction( A , size );


}