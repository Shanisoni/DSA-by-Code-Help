#include<iostream>
#include<vector>

using namespace std ;

void bubblesort( vector<int> &v, int n ) {

    for( int i = 0; i < n-1 ; ++i) {
        for( int j = 0; j < n-i-1 ; ++j) {
            if( v[j] > v[j+1]) {
                swap(v[j] , v[j+1]);
            }
        }
    }

}


int main() {

    vector<int> v = { 1 , 2 , 5 , 8  , 45 , 9 , 10 , 3 , 4 , 7};

    int n  = v.size();

    bubblesort(v , n);


    cout <<"Sorted Array is :" << endl;
    for( int i = 0; i < n; ++i) {
        cout << v[i] << "  ";
    }


}