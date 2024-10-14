#include<iostream>

using namespace std;

int main(){


      int n ;

      cin>> n ;


//  As w move down the number of spaces are increasing by 1  initialy the number of spaces are 0 and als0 as we move down the number of 
// stars are decreasing by 1 so we say that for spaces
// spaces =  nth row 
//  and for stars 
// stars = n(inputs) - row -1(to balance bacuse the indexing s5tars from 0)
      for(int i = 0;  i<n; i++){
        // spaces
        for(int j=0; j<i+1; j++){
            cout<<" ";
        }
        for(int j= 0; j<n-i-1; j++){
            cout<<"* ";
        }
          cout<<endl;
      }
    


}