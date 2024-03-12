#include<iostream>

using namespace std;

int main(){

    int n;
    cin>>n;

   for(int i =0; i<n; i++){
        // spaces
        for(int c = 0; c<n-1-i; c++){
            cout<<" ";
        }
        // Stars
        for(int c = 0; c<i+1; c++){
            cout<<"*  ṇ";
        }
        cout<<endl;
    }

  

    // for(int i = 0; i<n; i++){
    //     // space
    //     for(int row=0; row < i; row++){
    //         cout<<" ";
    //     }
    //     for(int row=0; row<n-i; row++){
    //         cout<<"* ";
    //     }
    //     cout<<endl;
    // } 

     
}