#include<iostream>
#include<vector>

using namespace std ;

bool shanii(int shani[2][3], int row , int col , int target ) {
    for( int i = 0 ; i < row ; i ++ ) {
        for( int j = 0 ; j < col ;  j++ )  {
            if(shani[i][j]== target) {

                return true ; 

            }
            
            
        }

        
    }
    return false ;
}


// void soni(int shani[2][3],   int col ,int row , int target) {
//     for( int i = 0 ; i < row ; i ++ ) {
//         for( int j = 0 ; j < col ;  j++ )  { 
//              if(shani[i][j]== target) {

//                  cout << " Traget Element Exist" << endl; 
//             }
//             else{ 
//                  cout << " Traget element does not exist "  << endl ; 
//              }
//         }

//         cout << endl ; 
//     }
// }

int main () {

    int target ; 
    cin  >> target ;



  
    int shani[2][3] = {
        {9,2,3},

        {1,7,6} 
    
    };

      
    int row = 2;
    int col = 3;


   
//    soni(shani , row , col , target ) ;


   cout << endl; 

 cout << " Found or not " <<   shanii(shani , row , col , target ) ;


    
}