#include <iostream>
#include<limits.h>
using namespace std;

void printArray(int arr[], int size) {
  for(int i=0; i<size; i++) {
    cout << arr[i] << " " ;
  }
  cout << endl;
}

//present -> true;
//absent -> false;

bool linearSearch(int arr[], int size, int target) {

  for(int i=0; i<size; i++) {
    if(arr[i] == target) {
      //found
      return true;
    }
  }
  //not found
  return false;
}

void countZeroOne(int arr[], int size) {
  int zeroCount = 0;
  int oneCount = 0;

  for(int i=0; i<size; i++) {
    if(arr[i] == 0) {
      zeroCount++;
    }
    if(arr[i] == 1) {
      oneCount++;
    }
  }

  cout << "ZeroCount: " << zeroCount << endl;
  cout << "oneCOunt: " << oneCount << endl;
  
}

int findMinimumInArray(int arr[], int size) {
  //ans store variable
  int minAns = INT_MAX;

  for(int i=0; i<size; i++) {
    if(arr[i] < minAns) {
      minAns = arr[i];
    }
  }

  return minAns;
}
void reverseArray(int arr[], int size) {
  

  // for(int left =0, right=size-1; left<=right; left++, right--) {
  //  swap(arr[left], arr[right]);
  // }
  
  int left = 0;
  int right = size - 1;
  while(left <= right) {
    swap(arr[left], arr[right]);
    left++;
    right--;
  }

  //printing the array;
  for(int i=0; i<size; i++) {
    cout << arr[i] << " "; 
  }
  
}

void extremePrint(int arr[], int size) {
  int left = 0;
  int right = size - 1;

  while(left <= right) {
    if(left == right) {
      cout << arr[left] << endl;  
    }
    else {
      cout << arr[left] << endl;
      cout << arr[right] << endl;
    }
    
    left++;
    right--;
  }
  
}

int main() {

  int arr[6] = {10,20,30,40,50,60};
  int size = 6;

  // reverseArray(arr, size);
  extremePrint(arr, size) ;
  

  
  // int arr[] = {10,8,31,4,3,1,-51};
  // int size = 7;

  // int minimum = findMinimumInArray(arr, size);
  // cout << "Minimum number is: " << minimum << endl;

  

  // // -2 to the  power 31
  // cout << INT_MIN << endl;
  // //2 to the power 31 - 1
  // cout << INT_MAX << endl;
  
  // int arr[] = {0,0,0,1,1,0,1,0,1,0,1,0,1,1,1};
  // //zero => 7
  // //one => 8
  // int size = 15;
  // countZeroOne(arr,size);


  // int arr[5] = {2,4,6,8,10};
  // int size = 5;
  // int target = 10;

  // bool ans = linearSearch(arr, size, target);

  // if(ans == 1) {
  //  cout << "Target found" << endl;
  // }
  // else {
  //  cout << "Target Not found" << endl;
  // }
  
  // //function call
  // printArray(arr,  size);

  //array creation
  // int arr[101];
  // char ch[102];
  // bool flags[223];
  // long num[900];
  // short snum[1000];

  // cout << "Array created successfully" << endl;

  //int arr[100];

  // int a = 5;
  // cout << "Size of a: "<< sizeof(a) << endl;
  // //cout << "Address of a :" << &a << endl;


  // int arr[10];
  // cout << "Size of arr: "<< sizeof(arr) << endl;
  // //cout << "Base address if Arr is: " << &arr << endl;
  // //cout << "Base address if Arr is: " << arr << endl;\

  // int arr[] = {2,3,4,56,6};

  // int brr[5] = {1,2,3,4,5};

  // int crr[5] = {2,3};
  // //error
  // int drr[2] = {1,2,3,44,5};

  // int arr[50] = {5,8,9,12,13};

  // int n = 5;
  // for(int i=0; i<n; i++) {
  //  cout << arr[i] << " ";
  // }

  // cout << arr[0] << endl;
  // cout << arr[1] << endl;
  // cout << arr[2] << endl;
  // cout << arr[3] << endl;
  // cout << arr[4] << endl;

  //taking input in an array
  // int arr[5] ;
  // int n = 5;
  // for(int i=0; i<n; i++) {
  //  cout << "Enter the value for index " << i << ": " ;
  //  cin >> arr[i];
  //  cout << endl;
  // }

  // //printing an array
  // cout << "Printing the array " << endl;

  // for(int i=0; i<n; i++) {
  //  cout << arr[i] << " " ;
  // }

  //array create krdo
  // int arr[10];
  // //input lelo
  // int n = 10;
  // for(int i=0; i<n; i++) {
  //  cin >> arr[i];
  // }
  // cout << "Printing after taking input" << endl;
  // //print
  
  // for(int i=0; i<n; i++) {
  //  cout << arr[i] << " ";
  // }
  // //double - up
  // //cout << "Doubles: " << endl;
  // for(int i=0; i<n; i++) {
  //  arr[i] = 2*arr[i];
  // }

  // //print
  // cout << "Printing after taking double" << endl;
  // for(int i=0; i<n; i++) {
  //  cout << arr[i] << " ";
  // }


  // int arr[5];

  // //input;
  // int n = 5;
  // cout << "Enter the input " << endl;
  // for(int i=0; i<n; i++) {
  //  cin >> arr[i] ;
  // }

  // //calculate sum;
  // int sum  = 0;
  // for(int i=0; i<n; i++) {
  //  sum = sum + arr[i];
  // }

  // cout << "printing sum: " << sum << endl;


  // int arr[5] = {2,4,6,8,10};
  // int target = 11;
  // int n = 5;

  // bool flag = 0;
  // // 0 -> not found;
  // //1 -> found
  
  // for(int i=0; i<n; i++) {
  //  if(arr[i] == target) {
  //    //found
  //    flag = 1;
  //    break;
  //  }
  // }

  // if(flag == 1) {
  //  cout << "target found";
  // }
  // else {
  //  cout << "target not found" << endl;
  // }
  
    
  return 0;
}