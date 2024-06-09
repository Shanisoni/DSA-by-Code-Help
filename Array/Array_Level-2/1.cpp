#include<iostream>

using namespace std;


int getUninum(int arr[] , int n){
    int ans = 0 ;

    for( int i = 0 ; i < n ; i++ ){
        ans = ans^arr[i];
    }
    return ans;
}


int main() {
    int arr[] = { 10 , 11 , 12 , 14 , 17 , 10 , 11 , 12 , 14 , 17 , 20};
    int n = 11 ;

    int result = getUninum( arr , n );

    cout << "The unique element is :" << result << endl;

}