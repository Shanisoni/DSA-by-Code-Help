#include<iostream>
using namespace std;

int main(){

   

    int N ;
    cin>> N ;
   
   
    for(int i=0; i<N; i++){
         int k = 0;
        
        for(int j=0; j< ((2*N)-1); j++){
            if(j<N-i-1){
                cout<< " ";
            }
             else if( k < 2 * i + 1 ){
                 cout<<"*";
                  k++;
            }else{
                cout<< " ";
            }
        }
         cout<<endl;
    }

  
}
