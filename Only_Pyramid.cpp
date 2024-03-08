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
            cout<<"* ";
        }
        cout<<endl;
    }
}