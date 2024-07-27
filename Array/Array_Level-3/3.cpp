#include<iostream>
#include<vector>

using namespace std ;

void shanii(int shani[2][3], int row , int col) {
    int sum = 0 ;
    for( int i = 0 ; i < row ; i ++ ) {
        for( int j = 0 ; j < col ;  j++ )  { 
            sum += shani[i][j];
            
           
        }
         cout << sum <<endl ;

       
    }
    
}


// void soni(int shani[2][3],   int col ,int row) {
//     for( int i = 0 ; i < row ; i ++ ) {
//         for( int j = 0 ; j < col ;  j++ )  { 
//             cout << shani[j][i] << " " ; 
//         }

//         cout << endl ; 
//     }
// }

int main () {



  
    int shani[2][3] = {
        {9,2,3},

        {1,7,6} 
    
    };

      
    int row = 2;
    int col = 3;


   
//    soni(shani , row , col ) ;


   cout << endl; 

   shanii(shani , row , col ) ;


    
}