//find pivot index:

#include <iostream>
#include<vector>
using namespace std;

int findPivotIndex(vector<int>& arr) {
        int n = arr.size();
        int s = 0;
        int e = n-1;
        int mid = s + (e-s)/2;

        while(s <= e) {
            //corner case
            if(s == e) {
                //single element
                return s;
            }

            if(arr[mid] > arr[mid+1])
                return mid;
            else if(arr[mid] < arr[mid-1])
                return mid-1;
            else if(arr[s] > arr[mid] ) 
                e = mid - 1;
            else 
                s = mid + 1;
            
            mid = s + (e-s)/2;
        }
        return -1;

    }


int main() {
  vector<int> v;


  v.push_back(2);
  v.push_back(4);
  v.push_back(6);
  v.push_back(8);
  v.push_back(10);

  int pivotIndex = findPivotIndex(v);
  cout << "Pivot Index is: " << pivotIndex << endl;
  return 0;
}


//search in a rotated and sorted array 
class Solution {
public:

    int findPivotIndex(vector<int>& arr) {
        int n = arr.size();
        int s = 0;
        int e = n-1;
        int mid = s + (e-s)/2;

        while(s <= e) {
            //corner case
            if(s == e) {
                //single element
                return s;
            }

            if(mid+1 < n && arr[mid] > arr[mid+1])
                return mid;
            else if(mid-1 >=0 && arr[mid] < arr[mid-1])
                return mid-1;
            else if(arr[s] > arr[mid] ) 
                e = mid - 1;
            else 
                s = mid + 1;
            
            mid = s + (e-s)/2;
        }
        return -1;

    }

    int binarySearch(vector<int>& arr, int s, int e, int target) {
        int mid = s + (e-s)/2;
        while(s<=e) {
            if(arr[mid] == target) {
                return mid;
            }
            if(target > arr[mid]) {
                s = mid + 1;
            }
            else {
                e = mid - 1;
            }
            mid = s + (e-s)/2;
        }
        return -1;
    }

    int search(vector<int>& nums, int target) {
        int pivotIndex = findPivotIndex(nums);
        cout << "Pivot Index us: " << pivotIndex << endl;
        int n = nums.size();
        int ans = -1;

        //search in A
        if(target >= nums[0] && target <= nums[pivotIndex]) {
            ans = binarySearch(nums, 0, pivotIndex, target);
        }
        else {
            ans = binarySearch(nums, pivotIndex+1, n-1, target);
        }
        return ans;
    }
};


//find square root of a number 
class Solution {
public:


    int mySqrt(int x) {
        int s = 0;
        int e = x;
        long long int mid = s + (e-s)/2;
        int ans = -1;

        while(s <= e) {
            //kya mid hi toh answer nahi
            if(mid*mid == x) {
                return mid;
            }
            else if(mid*mid < x) {
                //ans store
                //right me jao
                ans = mid;
                s = mid+1;
            }
            else {
                //left me jana h 
                e = mid-1;
            }
            mid = s + (e-s)/2;
        }
        return ans;
    }
};


//binary search in a  2D matrix 
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row = matrix.size();
        int col = matrix[0].size();
        int n = row*col;

        int s = 0;
        int e = n-1;
        int mid = s + (e-s)/2;

        while(s <= e) {
            int rowIndex = mid/col;
            int colIndex = mid % col;
            int currNumber = matrix[rowIndex][colIndex];

            if(currNumber == target)
                return true;
            else if(target > currNumber ) {
                //right;
                s = mid + 1;
            } 
            else {
                //left;
                e = mid-1;
            }
            mid = s + (e-s)/2;
        }
        return false;
    }
};