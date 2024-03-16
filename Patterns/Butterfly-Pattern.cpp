#include<iostream>

using namespace std;



int main(){
     int n ;

    cin>> n ;


    for(int i = 0; i<n ; i++){
        for(int j = 0; j<i+1; j++){
            cout<<"* ";
        }
        cout<<endl;
        
      
    }
    for(int i = 0; i<n ; i++){
        for(int k =0; k<n-i; k++){
            // char num1 = k + 'A' -1;
            cout<<"* ";
        }
        cout<<endl;

    }
    //    for(int i = 0; i<n ; i++){
    //     for(int k =0; k<n-i; k++){
    //         // char num1 = k + 'A' -1;
    //         cout<<"* ";
        
    //     }
    //     cout<<endl;

    // }
    //  cout<<endl;
    //  for(int i = 0; i<n ; i++){
    //     for(int g=0; g<n-i; g++){
    //         if( ){

    //         }


    // }
}

    
