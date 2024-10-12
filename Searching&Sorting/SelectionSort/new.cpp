#include<iostream>
#include<vector>
using namespace std ;


 void SelectionSort( vector<int> & v , int n ) {
    for ( int i = 0; i < n-1 ; i++) {
        int minIndex = i;
        for( int j = i + 1;  j < n ; j++) {
            if ( v[j] < v[minIndex]){

                minIndex = j ;

            }
        }

        swap(v[i], v[minIndex] );
    }
}

int main() {

    vector<int> v = { 2 , 3 , 89 , 0 , 45 , 3 , 87  , 56  ,423  };

    int n =  v.size();

    SelectionSort(v , n) ;

    cout << " Sorted Array is : " << endl;

    for ( int i = 0 ; i < n ;  i++) {
        cout << v[i] << " " ;
    }






}