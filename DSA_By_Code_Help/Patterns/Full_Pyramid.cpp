#include<iostream>
using namespace std;


int main(){
    // At first we we will take an input n
    int n ;

    cin>> n ;
//  then we will initialize a loop for the row 
// this loop will run for n-1 , however the indexing will start from 0 
    for(int i = 0; i<n ; i++){
        // Now we will intialize another loop for the column 
   //    *
    //  * *
    // * * *
//    * * * *
//   * * * * *
//  * * * * * *
// * * * * * * * 

        // Since the number of stars are increasing by 1 as we move down 
        // so we  can say it is increasing by i + 1 
        // So we will initialize the variable j for < i + 1 
        // And the spaces are decreasing by one so we can say
        // if the row is 0 and inout is n then there is 
        // n-row-1 spaces 
        

        for(int j=0; j<n-i-1; j++){
            cout<<" ";
        }
        for(int j =0; j<i+1; j++){
            char ch =  j+1 + 'A' -1 ;

            cout<<ch ;
        }
        
        cout<<endl;
    }
}