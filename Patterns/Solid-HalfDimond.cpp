#include<iostream>

using namespace std;



int main(){
     int n ;

    //  int m ;

    //  cin>>m;

    cin>> n ;
       for(int i = 0; i<n ; i++){
        // Spaces
        for(int j = 0; j<i+1; j++){
            cout<<"*";
        }
      
        // Star
        
        for(int k = 0; k<n-i; k++){
            cout<<"  ";
        }

         for(int j = 0; j<i+1; j++){
            cout<<"*";
        }
          cout<<endl;
        
      
    }


    // Niche Wala 

     for(int i = 0; i<n ; i++){
        // Spaces
        for(int j = 0; j<n-i; j++){
            cout<<"*";
        }
      
        // Star
        
        for(int k = 0; k<i+1; k++){
            cout<<"  ";
        }

         for(int j = 0; j<n-i; j++){
            cout<<"*";
        }
          cout<<endl;
        
      
    }
    
}