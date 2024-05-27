#include<iostream>

using namespace std;

int chacha(int arr[] , int n){
    int ans = 0;

    for(int i = 0 ; i < n ; i++) {
        ans = ans ^ arr[i] ;
    }
    return ans ;
}




int main() {
     
     int arr[] = {2 , 2 ,9, 3 , 3 , 4, 4 , 5 , 5 , 6 , 9 ,};

     int n = 9 ;

     int result = chacha(arr , n);

     cout << "Final Result is : " << result << endl ;


}