#include<iostream>
#include<vector>

using namespace std ; 

int main () {


     vector< vector<int> > shani(5 , vector<int>(10, -1));

     for( int i = 0 ; i < shani.size() ; i++)  {
        for( int j = 0 ; j< shani[i].size() ; j++) {
            cout << shani[i][j]<< " " ; 
        }
        cout << endl; 
     }



    //  vector < vector < int >> shani(5 , vector<int>(10, -1))
 }