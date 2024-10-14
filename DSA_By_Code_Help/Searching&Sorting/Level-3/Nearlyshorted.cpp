#include<iostream>

using namespace std;

int findTargetIndex(int arr[], int n , int target) {
    int s = 0 ;
    int e = n-1;
    int mid = s + (e-s)/2 ;

    while( s<=e) {
        if(mid-1 >= 0 && arr[mid-1] == target) {
            return mid-1;

        }
        if(mid+1 < n && arr[mid+1] == target) {
            return mid+1;

        }
        if(arr[mid] == target){
            return mid;
        }

        if(target > arr[mid]){
            s = mid + 2;

        }
        else {
            e = mid - 2 ;
        }
        mid = s + (e-s)/2;
    }
    return -1;
}

int main() {
    int target = 90;
    int arr[] = {5 , 10 , 30 , 20 , 40 , 70 , 80 , 90, 100};
    int n  = 9;

    int targetIndex = findTargetIndex(arr, n, target);

    if(targetIndex == -1){
        cout << "Element is not found"  << endl;

    }
    else {
        cout << "Element is found at index:" << targetIndex << endl;
    }
}