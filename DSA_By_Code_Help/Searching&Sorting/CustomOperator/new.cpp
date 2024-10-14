#include<iostream>
#include<algorithm>
#include<vector>
using namespace std ;

bool mycomp( int a , int b){
    return a > b
;}


int main() {

    vector<int> v = { 2 , 3 , 89 , 0 , 45 , 3 , 87  , 56  ,423  };

    int n =  v.size();

    sort(v.begin() , v.end() , mycomp);

    // SelectionSort(v , n) ;

    cout << " Sorted Array is : " << endl;

    for ( int i = 0 ; i < n ;  i++) {
        cout << v[i] << " " ;
    }






}
