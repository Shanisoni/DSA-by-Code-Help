#include <iostream>

int main() {
    int numCount;
    
    // Getting the count of numbers
    std::cout << "Enter the count of numbers: ";
    std::cin >> numCount;
    
    // Array to store the numbers
    int numbers[numCount];
    
    // Getting input numbers from the user
    std::cout << "Enter " << numCount << " numbers: ";
    for(int i = 0; i < numCount; ++i) {
        std::cin >> numbers[i];
    }
    
    // Performing XOR operation on all numbers
    int result = numbers[0]; // Initialize result with first number
    for(int i = 1; i < numCount; ++i) {
        result ^= numbers[i]; // Perform XOR operation with each subsequent number
    }
    
    // Displaying the result
    std::cout << "XOR result: " << result << std::endl;
    
    return 0;
}
