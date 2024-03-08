#include<iostream>

using namespace std;

int main(){

    int n;
    cin>>n;

    for(int i = 0; i<n; i++){
        // space
        for(int col=0; col < i; col++){
            cout<<" ";
        }
        for(int col=0; col<n-i; col++){
            // Now only for the first and last astric we use first and last element 
            if(col==0 || col==n-i-1){
                  cout<<"* ";

            }else{
                // Give two space in the " " to print perfectly 
                cout<< "  ";
            }
          
        }
        cout<<endl;
    }
}
