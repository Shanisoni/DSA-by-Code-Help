#include<iostream>

using namespace std;

int main(){

    int n; 

    cin >> n;

    for(int i = 0; i<n; i++){

        int k =0;

          for(int j = 0; j<n-i; j++){
            cout<<"*";
        }

        // spaces
        //  for(int k = 0; k<i+1; k++){
        //     cout<<" ";
        // }


//      Star
        // for(int j = 0; j<n-i; j++){
        //     cout<<"*";
        // }


        for(int j=0; j<2*i+1; j++){
            cout<<" ";
        }

        for(int j=0; j<n-i; j++){
            cout<<"*";
        }


        cout<<endl;
    }

    //  for(int i = 0; i<n; i++){

    //     for(int j=0; j<i+1; j++){
    //         cout<<"*";
    //     }
    //     for(int j=0; j<n-i; j++){
    //         cout<<"  ";
    //     }
    //     for(int j=0; j<i+1; j++){
    //         cout<<"*";
    //     }


    //     cout<<endl;
        
    //  }



       


//      Star
        // for(int j = 0; j<n-i; j++){
        //     cout<<"*";
        // }
       
        
    
    


// }
   