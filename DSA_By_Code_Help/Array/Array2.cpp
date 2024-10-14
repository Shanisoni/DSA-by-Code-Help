#include <iostream>

using namespace std ;


void printedArray ( int arr[] , int size) {
        for (int i = 0 ; i < size; i++) {
            cout << arr[i] << endl;
        }
    }


int main() {

    int arr[8] = {2 , 3, 4, 6, 7, 8, 9, 0};

    int size = 8;

    printedArray(arr , size);
    


}