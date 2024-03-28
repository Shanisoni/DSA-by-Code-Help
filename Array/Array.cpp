#include<iostream>

using namespace std ; 


int main(){

    int array [100];

    char arra[100];

    bool arr [100];

    string ar [100];


    // & gives the adress of any variable
   cout<<"Adress of array:"<< &array<<endl;




//     to check the siz of variable  use sizeif 

       cout<<"Size of Array is :" << sizeof(array)<<endl;

    //     Four Cases of array 

    //  int array[ no size specified ]  = { 1,2,3,4,5,5,6}

    //  int ar [ 5 ] = { 1,2,3,4,5} equal

    //  int B[ 6 ]  = {  1,2,3,4,5,6,7}  limit exeed

    //  int c[ 5 ] = { 1 ,2 , 3}
     




     int c[5] ={1,2,3,4,8};
      
    // cout<<c[2];
    
    int num = 5;

    // for(int i =0; i<num; i++ ){
    //     cout<<c[i]<< " ";
    // }

     


    //  to take inputs from the user in array 

  
    int tom[10]={};

    int m = 10 ;
    

    for(int i = 0; i<m; i++){
        cout<<"Enter the elements of array:"<<i<<" ";
       
        cin >> tom[i];
        
    }
    
    for(int i = 0; i<m; i++){
       
         cout<<tom[i]<<" ";
        
    }
   
  


 

 
    
}