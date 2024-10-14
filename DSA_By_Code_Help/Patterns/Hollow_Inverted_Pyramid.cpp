#include<iostream>

using namespace std;

int main(){

    int n; 

    cin >> n;

     for(int i = 0; i<n; i++){
        for(int j=0; j<i+1; j++){
            if(i==0 || i==n-1){
                cout<<"*";
            }
            else{
                if(j==0 || j==n+i-1){
                    cout<<"*";
                }
                else{
                    cout<<" ";
                }
            }
        }
       
        cout<<endl;

    }

    // for(int i = 0; i<n; i++){
    //     for(int j=0; j<n-i; j++){
    //         if(i==0 || i==n-1){
    //             cout<<"*";
    //         }
    //         else{
    //             if(j==0 || j==n-i-1){
    //                 cout<<"*";
    //             }
    //             else{
    //                 cout<<" ";
    //             }
    //         }
    //     }
       
    //     cout<<endl;

    // }
}

        