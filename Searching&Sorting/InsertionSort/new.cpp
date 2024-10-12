#include<iostream>
#include<vector>

using namespace std  ;

void InsertionSort( vector<int> & v , int n ) {
    for( int i = 0 ; i < n-1; i++){

        int key = v[i];

        int j = i-1;

        while( j >=0 && v[j] > key) {
            v[j+1] = v[j];
            --j;
        }
        v[j+1] = key;

    }
}

int main() {
    vector<int> v = { 2, 6, 4 , 1 , 8 , 9,  5, 0, 10, 11};

    int n = v.size();

    InsertionSort(v , n);

    cout << "Sorted Array is : " << endl;

    for( int i = 0 ; i < n ; i ++ ) {
         cout << v[i] << " " ;
    }
}