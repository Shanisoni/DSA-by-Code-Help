#include<iostream>
#include<vector>
#include <algorithm>

using namespace std ; 


 void ShiftNegative(vector<int>& shani , int n) {
    int j = 0 ; 

    for ( int index = 0 ; index < n ; index++) {
        if ( shani[index] < 0 ) {
            swap(shani[index] , shani[j]);
            j++ ; 
        }


    }


 }



int main () {
     

    vector<int> shani = { 1, -2, 3, -4, 5, -6, 7, -8, 9, -10 } ;

    int n = shani.size();
    ``````````````````````````      
    ShiftNegative( shani , n) ;

    for ( int i = 0 ; i < n ; i++) {
        cout << shani[i] << " " ; 
    }

     


    
}

    