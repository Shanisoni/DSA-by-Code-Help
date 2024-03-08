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
             if(k== 0 || k==2*i || i == N-1)
               cout<<"*";
              else
                     
                // Now to make a holloe pyrrmid we give a condition which is this pramid can be only made hollow by modifying the values of 
                //  K so if the give the condition that on k== 0 and on k==2*i only print * ohter than it print " " it will be solved 
                // k==0 rfers the initial value of k and k==2*i refers the last vale in the row in pyramid 
               cout<<" ";  
            //   cout<<  "*";
             k++;
            }else{
                cout<< " ";
            }
        }
         cout<<endl;
    }

  
}
