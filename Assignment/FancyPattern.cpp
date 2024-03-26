#include<iostream>

using namespace std;

 int main(){
    int n ;
    cin>>n;

    int c =1;

    for(int i = 0; i<n; i++){
        for(int j = 0; j<=i; j++){
            // cout<<"*";
            cout<<c;
        }
        c++;
         cout<<endl;
    }

       int k =1;
       
      for(int i = 0; i<n; i++){
        for(int j = 0; j<=n-i; j++){
            // cout<<"*";
            cout<<k;
        }
        k++;
         cout<<endl;
    }
   
 }