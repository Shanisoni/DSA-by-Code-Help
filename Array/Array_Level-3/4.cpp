#include<iostream>
#include<vector>

using namespace std ;

void shanii(int shani[3][4], int row , int col) {
 
    for( int i = 0 ; i < row ; i ++ ) {
        for( int j = 0 ; j < col ;  j++ )  { 

            if( shani[i] == shani[j]){
                cout << shani[i][j] << " " ;
            }
            
            
           
        }
        
       

       
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



  
    int shani[3][4] = {
        {9,2,3 ,4},

        {1,7,6,7},

        {1,7,6,5} ,
          
          
    
    };

      
    int row = 3;
    int col = 4;


   
//    soni(shani , row , col ) ;


   cout << endl; 

   shanii(shani , row , col ) ;


    
}